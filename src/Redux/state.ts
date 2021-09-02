import {v1} from "uuid";

let renderApp = () => {
    console.log("11")
}

export const subscribe = (callback: () => void) => {
    renderApp = callback
}

export type postsType = {
    id: string
    message: string
    like: string
}
export type dialogsType = {
    id: string
    name: string
}

export type messagesType = {
    id: string
    message: string
}
export type pageMyPostType = {
    posts: Array<postsType>
    newMyPost: string
}

export type pageDialogsType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}

export type stateType = {
    pageMyPost: pageMyPostType
    pageDialogs: pageDialogsType
}

export type typeType = {
    state: stateType
}
export type AppType = {
    state: stateType
    updateNewMyPost: (newText: string) => void
    addNewMyPost: () => void
}

export type ProfileMyPostType = {
    posts: Array<postsType>
    newMyPost: string
    updateNewMyPost: (newText: string) => void
    addNewMyPost: () => void
}




let state: stateType = {
    pageMyPost: {
        posts: [
            {id: v1(), message: "I live in Astana", like: "5"},
            {id: v1(), message: "Yo Yo Yo", like: "50"},
            {id: v1(), message: "KazAgro", like: "15"},
        ],
        newMyPost : '',

    },
    pageDialogs: {
        dialogs: [
            {id: v1(), name: "Nick"},
            {id: v1(), name: "John"},
            {id: v1(), name: "Nicole"},
            {id: v1(), name: "Paul"},

        ],
        messages: [
            {id: v1(), message: "Hi ! Hi !"},
            {id: v1(), message: "What are you doing?"},
            {id: v1(), message: "React! React! React! React! React! "},
            {id: v1(), message: "Yo Yo Yo"},

        ],
    }
}
export let addNewMyPost = () => {
    let newMYPostForm : postsType = {id: v1(), message: state.pageMyPost.newMyPost, like: "0"}
    state.pageMyPost.posts.push(newMYPostForm)
    state.pageMyPost.newMyPost = ''
    renderApp()
}

export let updateNewMyPost = (newText: string) => {
    state.pageMyPost.newMyPost = newText
    renderApp()

}




export default state;