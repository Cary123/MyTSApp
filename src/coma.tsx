import React, { ReactNode } from 'react'

interface ICC {
    c0?: string,
    c1?: string,
    c2?: string
}

interface IBB {
    b0?: string,
    b1?: string,
    CCCom?: React.FunctionComponent<ICC>,
    [propName: string]: any
}

interface IAA {
    a0?: string,
    a1?: string,
    BBCom?: React.FunctionComponent<IBB> | string,
    CCCom?: React.FunctionComponent<ICC>,
    [propName: string]: any
}


const CC = (props: ICC) => {
    const { c0, c1, c2 } = props;
    return (
        <React.Fragment>
            <div>{c0}</div>
            <div>{c1}</div>
            <div>{c2}</div>
        </React.Fragment>
    )
}

const BB = (props: IBB) => {
    const { b0, b1, CCCom=CC, ...rest } = props;
    return (
        <React.Fragment>
            <div>{b0}</div>
            <div>{b1}</div>
            <CCCom {...rest}></CCCom>
        </React.Fragment>
    )
}

const AA = (props: IAA) => {
    const { a0, a1, BBCom=BB, ...rest } = props;
    return (
        <React.Fragment>
            <div>{a0}</div>
            <div>{a1}</div>
            <BBCom {...rest}></BBCom>
        </React.Fragment>
    )
}

export default AA