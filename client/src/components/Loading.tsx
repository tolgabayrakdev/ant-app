import { Spin } from "antd"

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className="flex h-screen justify-center items-center">
            <Spin size="large" />
        </div>
    )
}