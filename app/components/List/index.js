import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import './styles.less';

class List extends PureComponent {
  render() {
    const { ...tableProps } = this.props;
    const { loading } = tableProps;

    return (
      <Table
        {...tableProps}
        className="table-list"
        bordered
        loading={loading}
        scroll={{ x: 900 }}
        locale={{ emptyText: 'Không tìm thấy dữ liệu !' }}
        simple
        rowKey={record => `${record.id}${record.cost}`}
      />
    );
  }
}

List.propTypes = {
  dataSource: PropTypes.array,
  location: PropTypes.object,
};

export default List;
