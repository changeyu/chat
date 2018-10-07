import {observable, action} from 'mobx'

class PostStore {
  @observable post = [222]
  @observable comment = []
  @action.bound addpost(){
    this.post.push(new Date())
  }
  @action.bound addcomment(){
    this.comment.push(new Date())
  }
}
export default new PostStore() 