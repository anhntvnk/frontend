import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import messages from './messages';

export default function Provision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyleProvision>
      <Helmet>
        <title>Thông tin chứng từ Website</title>
        <meta name="description" content="Thông tin chứng từ Website" />
      </Helmet>
      <StyleContent>
        <StyledTitle>
          <FormattedMessage {...messages.provisionTitle} />
        </StyledTitle>
        <Row>
          <StyleCol lg={24}>
            <ul>
              <li>Điều khoản giao dịch</li>
              <li>
                Dịch vụ tiện ích Chính sách cung cấp thông tin và hỗ trợ theo
                các điều khoản thỏa thuận ký kết trong hợp đồng của doanh
                nghiệp.
              </li>
              <li>Quyền sở hữu trí tuệ</li>
              <li>Chính sách bảo mật</li>
            </ul>
            <span style={{ color: '#898989' }}>
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>1. Mục đích và phạm vi thu thập thông tin:</strong>
              </p>
              <p>
                Để truy cập và sử dụng một số dịch vụ tại website, bạn có thể sẽ
                được yêu cầu đăng ký với chúng tôi thông tin cá nhân (Email, Họ
                tên, Số ĐT liên lạc…). Mọi thông tin khai báo phải đảm bảo tính
                chính xác và hợp pháp. Chúng tôi không chịu mọi trách nhiệm liên
                quan đến pháp luật của thông tin khai báo.
              </p>
              <p>
                Chúng tôi thu thập và sử dụng thông tin cá nhân bạn với mục đích
                phù hợp và hoàn toàn tuân thủ nội dung của "Chính sách bảo mật"
                này. Khi cần thiết, chúng tôi có thể sử dụng những thông tin này
                để liên hệ trực tiếp với bạn dưới các hình thức như: Gửi thư
                ngỏ, đơn đặt hàng, thư cảm ơn, thông tin về kỹ thuật và bảo
                mật...
              </p>
              <p>
                Trong một số trường hợp, chúng tôi có thể thuê một đơn vị độc
                lập để tiến hành các dự án nghiên cứu thị trường và khi đó thông
                tin của bạn sẽ được cung cấp cho đơn vị này để tiến hành dự án.
                Bên thứ ba này sẽ bị ràng buộc bởi một thỏa thuận về bảo mật mà
                theo đó họ chỉ được phép sử dụng những thông tin được cung cấp
                cho mục đích hoàn thành dự án.
              </p>
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>2. Phạm vi sử dụng thông tin:</strong>
              </p>
              <span>
                - Website thu thập và sử dụng thông tin cá nhân quý khách với
                mục đích phù hợp và hoàn toàn tuân thủ nội dung của “Chính sách
                bảo mật” này.
              </span>
              <br />
              <span>
                - Khi cần thiết, chúng tôi có thể sử dụng những thông tin này để
                liên hệ trực tiếp với bạn dưới các hình thức như: gởi thư ngỏ,
                đơn đặt hàng, thư cảm ơn, thông tin về kỹ thuật và bảo mật, quý
                khách có thể nhận được thư định kỳ cung cấp thông tin sản phẩm,
                dịch vụ mới, thông tin về các sự kiện sắp tới hoặc thông tin
                tuyển dụng nếu quý khách đăng kí nhận email thông báo.
              </span>
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>3. Thời gian lưu trữ thông tin:</strong>
              </p>
              <span>
                Ngoại trừ các trường hợp về sử dụng thông tin cá nhân như đã nêu
                trong chính sách này, chúng tôi cam kết sẽ không tiết lộ thông
                tin cá nhân bạn ra ngoài.
              </span>
              <br />
              <p>
                Thông tin sẽ được lưu trữ vĩnh viễn cho đến kh quý khách không
                sử dụng dịch vụ của chúng tôi nữa.
              </p>
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>
                  4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân
                </strong>
              </p>
              <b>CÔNG TY CỔ PHẦN DỊCH VỤ VÀ GIẢI PHÁP SỐ MYP</b>
              <p>
                Địa chỉ : Số 7 ngõ Thông Phong, Tôn Đức Thắng, Phường Quốc Tử Giám, Quận Đống Đa, Hà Nội
              </p>
            </span>
            <span style={{ color: '#898989' }}>
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>
                  5. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa
                  dữ liệu cá nhân của mình
                </strong>
              </p>
              <span>
                Bất cứ thời điểm nào bạn cũng có thể truy cập và chỉnh sửa những
                thông tin cá nhân của mình theo các links thích hợp mà chúng tôi
                cung cấp.
              </span>
              <p style={{ margin: '10px 0', color: '#333' }}>
                <strong>
                  6. Cam kết bảo mật thông tin cá nhân khách hàng:
                </strong>
              </p>
              <p>
                Chúng tôi cam kết bảo mật thông tin cá nhân của bạn bằng mọi
                cách thức có thể. Chúng tôi sẽ sử dụng nhiều công nghệ bảo mật
                thông tin khác nhau nhằm bảo vệ thông tin này không bị truy lục,
                sử dụng hoặc tiết lộ ngoài ý muốn.
              </p>
              <p>
                Chúng tôi khuyến cáo bạn nên bảo mật các thông tin liên quan đến
                mật khẩu truy xuất của bạn và không nên chia sẻ với bất kỳ người
                nào khác. Nếu sử dụng máy tính chung nhiều người, bạn nên đăng
                xuất, hoặc thoát hết tất cả cửa sổ Website đang mở.
              </p>
            </span>
          </StyleCol>
        </Row>
      </StyleContent>
    </StyleProvision>
  );
}

const StyleProvision = styled.div``;
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
