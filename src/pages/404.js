import * as React from "react"

import HomeLayout from "../components/HomeLayout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <HomeLayout visisbleHeader={false}>
    <Seo title="404: Not found" />
    <div className="grid place-content-center h-screen text-center">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... despair.</p>
    </div>
  </HomeLayout>
)

export default NotFoundPage;
