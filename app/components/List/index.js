import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './styles.less';

class List extends PureComponent {
  render() {
    const { ...tableProps } = this.props;

    return (
      <Table
        {...tableProps}
        className="table-list"
        bordered
        scroll={{ x: 1200 }}
        simple
        rowKey={record => record.id}
      />
    );
  }
}

List.propTypes = {
  dataSource: PropTypes.object,
  location: PropTypes.object,
};

export default List;
