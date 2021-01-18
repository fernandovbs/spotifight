import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    // OAuth authentication providers...
    Providers.Spotify({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        scope: "user-read-recently-played user-top-read user-read-playback-position user-read-playback-state user-modify-playback-state user-read-currently-playing streaming playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-library-read",
        profile(profile) {
          return {
            id: profile.id,
            name: profile.display_name,
            email: profile.email,
            image: profile.images?.[0]?.url
          }
        },
      }),
  ],
  // Optional SQL or MongoDB database to persist users
  //database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)