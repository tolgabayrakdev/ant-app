import { Button } from "antd"

type Props = {}

export default function Home({ }: Props) {
    return (
        <div>
            <h1 className="text-center">Home Page here</h1>
            <Button type="primary">Deneme</Button>
        </div>
    )
}