import { FC } from "react";
import { Button, Modal, Typography } from "antd";
import { useDisclosure } from "@mantine/hooks";

const About: FC = () => {
  const [isModalOpen, { open: showModal, close: closeModal }] = useDisclosure();

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      >
        <Typography.Text>Content of the modal</Typography.Text>
        <Typography.Text>Content of the modal</Typography.Text>
        <Typography.Text>Content of the modal</Typography.Text>
        <Typography.Text>Content of the modal</Typography.Text>
        <Typography.Text>Content of the modal</Typography.Text>
        <Typography.Text>Content of the modal</Typography.Text>
      </Modal>
    </>
  );
};

export default About;
