import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './commentItem.css'

export default class CommentItem extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired
  }

  handleClick = () => {
    const {comment, index, deleteComment} = this.props
    // 提示
    if(window.confirm(`确定删除${comment.username}的评论吗?`)) {
      // 发送订阅事件删除
      // PubSub.publish('deleteComment', index)
      // 父级组件传递的func
      deleteComment(index);
    }
  }

  render () {
    const {comment} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.handleClick}>删除</a>
        </div>
        <p className="user"><span >{comment.username}</span><span>说:</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}
