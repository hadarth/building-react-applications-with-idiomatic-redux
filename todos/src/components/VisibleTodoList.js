import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { withRouter } from 'react-router-dom';
import { getVisibleTodos } from '../reducers'
import TodoList from './TodoList';

const mapStateToProps = (state, { match: { params: { filter } } }) => {
  // const filter = ownProps.match.params.filter
  return {
    todos: getVisibleTodos(state, filter || 'all'),
  }
}

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  {onTodoClick: toggleTodo}
)(TodoList));

export default VisibleTodoList;
