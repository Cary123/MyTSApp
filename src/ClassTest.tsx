import { Component } from "react";

interface IcomProps {
    title: string
}

interface IcomAProps {
    title: string,
    age: number
}

export default class ClassCom extends Component<IcomProps, {}> {
    render() {
        return (<div>{this.props.title}</div>)
    }
}

class ClassComA extends Component<IcomAProps, {}> {
    render() {
        return (<div>{this.props.age}</div>)
    }
}

export { ClassComA }