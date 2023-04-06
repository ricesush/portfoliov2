import { GameApi } from './GameApi';
import TodoList from './TodoList';
import { TableContentBtn, TableHead } from './TableContent';
import { MiniAppSection } from './MiniAppSection';
import { PostsList } from './PostsList';
import { MernCrud } from './MERNCrud';

export const MiniAppsTable = () => {
  const tableOfContent = [
    {
      title: 'To-do List',
      description:
        'The legendary todo list where you can add, delete, and mark as done your todos',
      miniApp: <TodoList />,
      isDone: false,
      id: 1,
    },
    {
      title: 'Pokemon API',
      description:
        'Pokemon API based mini app, you can type the pokemon name on the search bar',
      miniApp: <GameApi />,
      isDone: false,
      id: 2,
    },
    {
      title: 'Post',
      description: 'Mini App/Demo for creating and deleting post',
      miniApp: <PostsList />,
      isDone: false,
      id: 3,
    },
    {
      title: 'MERN CRUD',
      description: 'Guide on creating CRUD using MERN stack',
      miniApp: <MernCrud />,
      isDone: false,
      id: 4,
    },
  ];

  return (
    <table className='table table-dark table-hover table-sm table-borderless'>
      <TableHead title='Mini Apps' />
      <tbody>
        {tableOfContent.map((content) => {
          return (
            <TableContentBtn
              key={content.id}
              title={content.title}
              content={
                <MiniAppSection
                  title={content.title}
                  description={content.description}
                  miniApp={content.miniApp}
                  isDone={false}
                />
              }
            />
          );
        })}
      </tbody>
    </table>
  );
};
