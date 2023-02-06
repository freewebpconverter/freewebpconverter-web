import { Table, Space } from "antd";
import { Button, Icon } from "@components/atoms";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { table } from "@/theme/color";

const { Column } = Table;

interface DataType {
  name: string;
  oldSize: string;
  newSize: string;
  percent: string;
}

interface ListTableProps {
  fileList: DataType[];
}

const ListTable = (props: ListTableProps) => {
  const { fileList } = props;

  return (
    <Table
      style={{
        width: "100%",
        maxWidth: 720,
        marginTop: 50,
        borderRadius: 6,
        overflow: "hidden",
        border: `1px solid ${table.border}`,
      }}
      dataSource={fileList}
      pagination={false}
    >
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Old Size"
        dataIndex="oldSize"
        key="oldSize"
        responsive={["md"]}
      />
      <Column
        title="New Size"
        dataIndex="newSize"
        key="newSize"
        responsive={["md"]}
      />
      <Column
        title="Percent"
        dataIndex="percent"
        key="percent"
        responsive={["md"]}
      />
      <Column
        title="Action"
        key="action"
        render={(_: any, record: any) => (
          <Button
            type="link"
            download={`${record.name.replace(/\.[^/.]+$/, "")}.webp`}
            href={record.file}
          >
            <Space>
              <Icon icon={faDownload} />
              Download
            </Space>
          </Button>
        )}
      />
    </Table>
  );
};

export default ListTable;
