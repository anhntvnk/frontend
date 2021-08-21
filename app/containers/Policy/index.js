import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import messages from './messages';

export default function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StylePolicy>
      <Helmet>
        <title>Thông tin chứng từ Website</title>
        <meta name="description" content="Thông tin chứng từ Website" />
      </Helmet>
      <StyleContent>
        <StyledTitle>
          <FormattedMessage {...messages.policyTitle} />
        </StyledTitle>
        <Row>
          <StyleCol lg={24}>
            <b>• Hình thức thanh toán </b> <br />
            <span style={{ color: '#898989' }}>
              <p style={{ margin: '10px 0' }}>
                <strong>
                  1 - Thanh toán bằng tiền mặt 100%, không hoàn hủy:
                </strong>
              </p>
              <span>
                Khách hàng ở khu vực phạm vi toàn quốc, MYP sẽ thực hiện thỏa
                thuận ký kết hợp đồng với các điều khoản đã được thống nhất, và
                sẽ được đơn vị giao hàng chuyển đến địa chỉ của khách hàng và
                nhận tiền thanh toán khi khách hàng đã hài lòng.
              </span>
              <p>
                - Các yêu cầu giao hàng tại nhà cần có thông tin chính xác về
                người nhận, địa chỉ, số điện thoại. Một số trường hợp nhạy cảm
                như: giá trị đơn hàng lớn, thời gian giao hàng buổi tối, địa chỉ
                giao hàng trong ngõ, khu vực xa trung tâm. Chuyên viên phụ trách
                sẽ kiểm tra và thoả thuận thêm, thống nhất cách thức giao hàng
                cụ thể.
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>
                  2 - Thanh toán chuyển khoản ngân hàng - giao hàng qua dịch vụ
                  chuyển phát nhanh:
                </strong>
              </p>
              <span>
                - Với các địa chỉ không thuộc phạm vi nêu trên, khách hàng có
                thể thanh toán trước 100% giá trị sản phẩm qua một trong các tài
                khoản của MYP
              </span>
              <br />
              <span>
                - Ngay sau khi nhận được tiền thanh toán qua chuyển khoản, nhân
                viên tư vấn sẽ gọi điện thông báo trực tiếp tới khách hàng và
                hẹn ngày giờ giao hàng. Tuỳ theo địa chỉ của khách hàng mà thời
                gian giao hàng có thể từ 2 đến 4 ngày.
              </span>
              <p>
                - Sản phẩm có giá trị bao gồm thuế Giá trị gia tăng trên 20
                triệu VNĐ, theo Luật thuế GTGT do Nhà nước ban hành cần thanh
                toán chuyển khoản. Khách hàng có thể gọi cho nhân viên để được
                tư vấn chi tiết tại đây.
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>3 - Phí vận chuyển + phí bảo hiểm dịch vụ:</strong>
              </p>
              <span>
                - Phí vận chuyển: Miễn phí toàn quốc đối với các dịch vụ ký kết
                hợp đồng trên 6 tháng, tính phí đối với các dịch vụ khác hoặc
                tùy theo thỏa thuận.
              </span>
              <br />
              <p>
                - Phí bảo hiểm dịch vụ: Đối với các giấy tờ của bản hợp đồng ký
                kết sử dụng dịch vụ khi chuyển hàng thông qua bên thứ 3 là công
                ty có ký hợp đồng vận chuyển với MYP, khách hàng thanh toán
                khoản phí bảo hiểm sản phẩm, dịch vụ tùy theo giá trị của sản
                phẩm, dịch vụ. Trong quá trình vận chuyển nếu xảy ra hỏng hóc,
                mất mát, khách hàng sẽ được đền bù 100% giá trị sản phẩm tại
                thời điểm xuất bán nếu đóng bảo hiểm.
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>4 - Các trường hợp khác:</strong>
              </p>
              <p>
                - Khách hàng có yêu cầu chuyển hàng qua bên thứ 3 khác như nhà
                xe, người quen, hoặc đơn vị vận chuyển không ký hợp đồng trực
                tiếp với MYP. Chi phí và mọi rủi ro trong quá trình vận chuyển
                do khách hàng chịu. Khi nhân viên giao hàng MYP bàn giao sản
                phẩm cho bên thứ 3, thì khách hàng và đối tác vận chuyển của
                khách hàng cần xác nhận bằng điện thoại, tin nhắn SMS hoặc trên
                hóa đơn xuất ra của MYP.
              </p>
            </span>
            <b>• Đăng ký thành viên</b> <br />
            <span style={{ color: '#898989' }}>
              <p style={{ margin: '10px 0' }}>
                <strong>1.Tài khoản không mất phí</strong>
              </p>
              <span>
                Đối với những khách hàng có nhu cầu tìm hiểu để sử dụng sản phẩm
                – dịch vụ của MYP, sẽ được đăng ký và cấp tài khoản gói Basic
                hoàn toàn miễn phí. Nền tảng phần mềm của chúng tôi đã thiết lập
                chế độ tạo tài khoản tự động bản Basic đối với bất cứ khách hàng
                có nhu cầu đăng ký thành viên{' '}
              </span>
              <p style={{ margin: '10px 0' }}>
                <strong>2. Tài khoản trả phí</strong>
              </p>
              <p>
                Khi khách hàng đăng ký để trở thành thành viên sử dụng gói
                Standard, hệ thống sẽ lưu lại những thông tin của bạn. Và chúng
                tôi sẽ ngay lập tức liên hệ trao đổi và tư vấn Miễn Phí những
                thông tin liên quan đến cách thức sử dụng cho tài khoản trả phí
                cũng như những lợi ích khách hàng nhận được{' '}
              </p>
            </span>
            <b>• Đăng ký thành viên</b> <br />
            <span style={{ color: '#898989' }}>
              <p style={{ margin: '10px 0' }}>
                <strong>• Đăng nhập</strong>
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>1. Tài khoản không mất phí</strong>
              </p>
              <p>
                Mọi thông tin mà khách hàng đã đăng ký để tạo tài khoản sẽ được
                ghi nhận và chấp thuận trên hệ thống. Trở thành tài khoản chính
                thức bạn có thể sử dụng ngay lập tức
              </p>
              <p style={{ margin: '10px 0' }}>
                <strong>2. Tài khoản trả phí</strong>
              </p>
              <p>
                Sau khi khách hàng và bên cung cấp sản phẩm, dịch vụ đã thống
                nhất và đồng ý ký kết hợp đồng. MYP sẽ tạo tài khoản đối với gói
                trả phí. Mọi thông tin tài khoản đăng nhập bao gồm: Tên đăng
                nhập và mật khẩu.. sẽ được gửi về địa chỉ email khách hàng đã
                đăng ký để đảm bảo mức độ bảo mật.{' '}
              </p>
            </span>
          </StyleCol>
        </Row>
      </StyleContent>
    </StylePolicy>
  );
}

const StylePolicy = styled.div``;
const StyledTitle = styled(H1)`
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 767.99px) {
    margin-bottom: 20px;
  }
`;
const StyleContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 50px 0;
  @media screen and (max-width: 767px) {
    width: auto;
  }
`;
const StyleCol = styled(Col)`
  padding: 0 100px;
`;
