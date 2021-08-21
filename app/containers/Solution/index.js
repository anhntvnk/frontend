import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import H1 from 'components/H1';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import './styles.less';
import styled from 'styled-components';
import messages from './messages';

export default function Solution() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StyleSolution>
      <Helmet>
        <title>Thông tin chứng từ Website</title>
        <meta name="description" content="Thông tin chứng từ Website" />
      </Helmet>
      <StyleContent>
        <StyledTitle>
          <FormattedMessage {...messages.solutionTitle} />
        </StyledTitle>
        <Row>
          <StyleCol lg={24}>
            <b>• Chủ dự án</b> <br />
            <span style={{ color: '#898989' }}>
              <span style={{ margin: '10px 0' }}>
                <strong>Yên tâm lựa chọn nhà thầu, nhà cung cấp phù hợp</strong>
              </span>
              <p>
                Thông qua cộng đồng ngành xây dựng, MYP đang thay đổi cách chủ
                dự án và các chuyên gia xây dựng làm việc cùng nhau. Sử dụng
                công nghệ mới nhất, chúng tôi kết nối các chuyên gia trong ngành
                và cung cấp nền tảng giao tiếp hiệu quả và tiết kiệm chi phí.
                Giúp bạn quản lý dự án theo ngân sách và đúng tiến độ bằng cách
                sử dụng các công cụ đang được cung cấp cho tất cả các thành viên
                của MYP
              </p>
            </span>
            <b>• Nhà thầu</b> <br />
            <span style={{ color: '#898989' }}>
              <span style={{ margin: '10px 0' }}>
                <strong>
                  Giúp bạn định vị và có được cơ hội tốt nhất, đúng thời điểm
                  nhất.
                </strong>
              </span>
              <br />
              <p>
                Bạn đang tìm kiếm các dự án xây dựng tiềm năng, bao gồm các loại
                hình dự án công nghiệp, sản xuất, dân dụng và thương mại để chào
                thầu hoặc muốn nắm bắt thông tin thị trường hiện tại và theo dõi
                kết quả đấu thầu?
              </p>
            </span>
            <b>• Nhà cung cấp</b> <br />
            <span style={{ color: '#898989' }}>
              <span style={{ margin: '10px 0' }}>
                <strong>Bán hàng trên My Project</strong>
              </span>
              <p>
                Bạn cần tiếp cận những Keyperson - người quyết định của dự án
                tiềm năng hay bán hàng trực tiếp vào các dự án xây dựng (bao gồm
                các dự án công nghiệp, sản xuất, dân dụng và thương mại) để chào
                thầu hoặc muốn nắm bắt thông tin thị trường hiện tại và theo dõi
                kết quả đấu thầu?.
              </p>
            </span>
            <b>• Giải pháp Marketing</b> <br />
            <span style={{ color: '#898989' }}>
              <span style={{ margin: '10px 0' }}>
                <strong>
                  Giải pháp Marketing chuyên nghiệp cho khách hàng ngành xây
                  dựng
                </strong>
              </span>
              <p>
                Là phần mềm đặc biệt cho toàn bộ chuỗi cung ứng ngành xây dựng,
                MYP mang đến cho bạn cơ hội tiếp cận với các khách hàng và đối
                tác tiềm năng đang tìm kiếm dịch vụ và sản phẩm của bạn
              </p>
            </span>
            <b>• Nghiên cứu thị trường</b> <br />
            <span style={{ color: '#898989' }}>
              <span style={{ margin: '10px 0' }}>
                <strong>
                  Sở hữu đội ngũ nghiên cứu và phân tích thị trường của riêng
                  bạn tại My Project
                </strong>
              </span>
              <p>
                My Project có cộng đồng hàng trăm nghìn kỹ sư chuyên nghiệp hoạt
                động trong ngành xây dựng. Là đơn vị trực tiếp triển khai các
                hoạt động của Hiệp hội xây dựng công nghiệp Miền Bắc, Miền Nam
                tạo ra nguồn doanh thu lớn. Hãy để đội ngũ của chúng tôi hỗ trợ
                doanh nghiệp của bạn thực hiện các nghiên cứu để tăng tính khả
                thi, thúc đẩy các kế hoạch kinh doanh, giảm thiểu rủi ro và đưa
                ra quyết định tốt hơn.
              </p>
            </span>
          </StyleCol>
        </Row>
      </StyleContent>
    </StyleSolution>
  );
}

const StyleSolution = styled.div``;
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
