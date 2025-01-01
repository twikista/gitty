export const config = {
  accessToken:
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_ACCESS_TOKEN
      : import.meta.env.ACCESS_TOKEN,
  username:
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_USERNAME
      : import.meta.env.USERNAME,
}
