import React from "react"
import ClassCom from "./ClassTest"

interface IcomProps {
    title: string
}

const com: React.FC<IcomProps> = (props) => {
    return (<div>{props.title}</div>)
}

const ComHoc = <P extends IcomProps>(WrapComponent: React.ComponentType<P>) => {
    return (props: P) => {
        return (
            <div>
                <div>hello</div>
                <ClassCom title={"OK"}></ClassCom>
                <WrapComponent {...props}></WrapComponent>
            </div>
        )
    }
}
export { ComHoc, com };