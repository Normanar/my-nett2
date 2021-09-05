import {v1} from "uuid";


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

export type ProfileMyPostType = {
    posts: Array<postsType>
    newMyPost: string
    updateNewMyPost: (newText: string) => void
    addNewMyPost: () => void
}

export type StoreType = {
    _state: stateType
    _renderApp: () => void
    subscribe: (callback: () => void) => void
    addNewMyPost: () => void
    updateNewMyPost: (newText: string) => void
    getState: () => stateType
}


export const store: StoreType = {
    _state: {
        pageMyPost: {
            posts: [
                {id: v1(), message: "I live in Astana", like: "5"},
                {id: v1(), message: "Yo Yo Yo", like: "50"},
                {id: v1(), message: "KazAgro", like: "15"},
            ],
            newMyPost: '',

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
    },
    _renderApp() {
        console.log("11")
    },
    subscribe(callback) { /*callback прописан в типизации поэтому здесь его можно не прописывать*/
        this._renderApp = callback
    },
    addNewMyPost() {
        let newMYPostForm: postsType = {id: v1(), message: this._state.pageMyPost.newMyPost, like: "0"}
        this._state.pageMyPost.posts.push(newMYPostForm)
        this._state.pageMyPost.newMyPost = ''
        this._renderApp()
    },
    updateNewMyPost(newText: string) {
        this._state.pageMyPost.newMyPost = newText
        this._renderApp()
    },
    getState() {
        return this._state
    }
};


