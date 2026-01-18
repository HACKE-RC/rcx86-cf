import { useQuery } from "@tanstack/react-query"

const ONE_HOUR = 1000 * 60 * 60

export const useRepoStars = ({ url }: { url: string }) => {
  return useQuery({
    queryKey: ["github-stars", url],

    queryFn: async () => {
      const key = `gh-stars:${url}`

      const cached = localStorage.getItem(key)
      if (cached) {
        const { stars, time } = JSON.parse(cached)

        if (Date.now() - time < ONE_HOUR) {
          return stars as number
        }
      }

      const req = await fetch(url.replace('github.com/', 'api.github.com/repos/'))
      if (!req.ok) return 500

      const res = await req.json()
      const stars = res.stargazers_count as number

      localStorage.setItem(
        key,
        JSON.stringify({ stars, time: Date.now() })
      )

      return stars
    },

    staleTime: ONE_HOUR,
  })
}
