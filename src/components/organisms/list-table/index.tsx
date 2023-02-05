import { Table } from "antd";
import { Button } from "@components/atoms";

const { Column } = Table;

interface DataType {
  name: string;
  oldSize: string;
  newSize: string;
  percent: string;
}

const dataSource: DataType[] = [
  {
    name: "image.jpg",
    oldSize: "50 KB",
    newSize: "10 KB",
    percent: "20%",
  },
];

interface ListTableProps {
  fileList: DataType[];
}

const ListTable = (props: ListTableProps) => {
  const { fileList } = props;

  return (
    <Table
      style={{ width: "100%", maxWidth: 720, marginTop: 50 }}
      dataSource={fileList}
      pagination={false}
    >
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Old Size" dataIndex="oldSize" key="oldSize" />
      <Column title="New Size" dataIndex="newSize" key="newSize" />
      <Column title="Percent" dataIndex="percent" key="percent" />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: any) => (
          <Button
            type="link"
            download={`${record.name.replace(/\.[^/.]+$/, "")}.webp`}
            href={record.file}
          >
            Download
          </Button>
        )}
      />
    </Table>
  );
};

export default ListTable;
