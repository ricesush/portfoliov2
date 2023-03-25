import { GameApi } from './GameApi';
import TodoList from './TodoList';
import { TableContentBtn, TableHead } from './TableContent';
import { MiniAppSection } from './MiniAppSection';
import { PostsList } from './PostsList';

export const MiniAppsTable = () => {
  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='Mini Apps' />
      <tbody>
        <TableContentBtn
          title='To-do List'
          content={
            <MiniAppSection
              title='Todo-List'
              description='The legendary todo list where you can add, delete, and mark as done your todos'
              miniApp={<TodoList />}
            />
          }
        />
        <TableContentBtn
          title='Pokemon API'
          content={
            <MiniAppSection
              title='Pokemon API'
              description='Pokemon API based mini app, at the moment, try to type a '
              miniApp={<GameApi />}
            />
          }
        />
        <TableContentBtn
          title='Post'
          content={
            <MiniAppSection
              title='Post'
              description='Mini App/Demo for creating and deleting post'
              miniApp={<PostsList />}
            />
          }
        />
      </tbody>
    </table>
  );
};
