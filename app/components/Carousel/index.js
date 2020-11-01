import React from 'react';
import { Carousel, Row, Col, List, Card } from 'antd';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './styles.less';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      slide: 0,
    };
  }

  render() {
    return (
      <div>
        {/* <Row style={{ marginBottom: 10 }}>
          <InputNumber
            value={this.state.slide}
            onChange={e => {
              this.setState({
                slide: e,
              });
              this.slider.current.goTo(e);
            }}
          />
        </Row> */}
        <Row>
          <Col className="circle-out-lined" md={4}>
            <LeftCircleFilled />
          </Col>
          <Col md={16}>
            <Carousel
              dots={false}
              ref={ref => {
                this.slider.current = ref;
              }}
            >
              <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.title}>Card content</Card>
                  </List.Item>
                )}
              />
              <div>
                <h3>0</h3>
              </div>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
            </Carousel>
          </Col>
          <Col className="circle-out-lined" md={4}>
            <RightCircleFilled />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CarouselSlide;
