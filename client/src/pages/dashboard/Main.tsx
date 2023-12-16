import { Helmet } from "react-helmet-async"

type Props = {}


export default function Main({ }: Props) {
  return (
    <div>
      <Helmet>
        <title>Ant-App | Dashboard</title>
      </Helmet>
      <p>Main page</p>
    </div>
  )
}