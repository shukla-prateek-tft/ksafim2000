import { Button, Flex } from '@/components';
import { AiOutlineDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';
import { FaSave } from 'react-icons/fa';

interface ActionColumnInterface {
  handleEdit: (id: any) => void;
  handleDelete: (id: any) => void;
  handleSave: (id: string) => void;
  selectedRows?: any;
}
export const ActionColumns = ({
  handleEdit,
  handleDelete,
  handleSave,
  selectedRows
}: ActionColumnInterface) => {
  return {
    id: 'actions',
    header: () => <Flex size="xs">Actions</Flex>,
    cell: ({ row }: any) => (
      <Flex size="xs">
        {selectedRows?.includes(row.original.id) ? (
          <Button
            onClick={() => handleSave(row.getValue('id') as string)}
            renderIcon={() => <FaSave size={13} />}
          />
        ) : (
          <Button
            onClick={() => handleEdit(row.getValue('id') as string)}
            renderIcon={() => <FiEdit3 size={13} />}
          />
        )}
        <Button
          onClick={() => handleDelete(row.getValue('id') as string)}
          renderIcon={() => <AiOutlineDelete size={13} />}
        />
      </Flex>
    )
  };
};
