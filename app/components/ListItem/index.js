import React from 'react';
import { Row, Col, List, Card } from 'antd';
import './styles.less';

const listData = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
  }

  render() {
    return (
      <Row className="list-item">
        <Col>
          <List
            grid={{
              gutter: 16,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3,
            }}
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 6,
            }}
            dataSource={listData}
            // footer={
            //   <div>
            //     <b>ant design</b> footer part
            //   </div>
            // }
            renderItem={item => (
              <List.Item>
                <Card title={item.title}>Card content</Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }
}

export default ListItem;
