import { Spin } from "antd"

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div>
            <Spin />
        </div>
    )
}