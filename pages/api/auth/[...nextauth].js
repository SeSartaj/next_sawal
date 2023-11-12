import CredentialsProvider from "next-auth/providers/credentials";
import Takhnik from "@/services/api";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/components/utils/ErrorMessage";
import { toast } from "react-toastify";
import NextAuth from "next-auth";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // Configuration options (as per your code example)
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        let user
        let { username, password } = credentials;
        Takhnik.auth
          .signin({ username, password })
          .then((res) => {
        Takhnik.users
          .retrieve(res.data.id)
          .then((res) => {
            user = res.data;
          })
          .catch((error)=> {
            console.error(getErrorMessage(error));
            toast(getErrorMessage(error), {
              hideProgressBar: true,
              autoClose: 2000,
              type: "error",
            });
          });
      })
      .catch((error) => {
        console.error(getErrorMessage(error));
        toast(getErrorMessage(error), {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
        });
      });
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
      
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
      // Return false to display a default error message
      return false
      // Or you can return a URL to redirect to:
      // return '/unauthorized'
    }
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
    // Allows callback URLs on the same origin
    else if (new URL(url).origin === baseUrl) return url
    return baseUrl
    },
    async session({ session, user, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
    
    return session
    },
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
    if (account) {
      token.accessToken = account.access_token
      token.id = profile?.id
    }
    return token
    }
  }})