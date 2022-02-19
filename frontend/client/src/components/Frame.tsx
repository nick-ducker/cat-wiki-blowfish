import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

type FrameProps = {
  children: {
    header?: ReactNode;
    main: ReactNode;
    footer?: ReactNode;
  };
};

const Frame = ({ children: { header, main, footer } }: FrameProps) => {
  return (
    <Row className="m-md-0">
      <Col className="col-lg-2 col-md-1 col-sm-1 d-none d-sm-flex"></Col>
      <Col className="bg-white p-0">
          <>
            {header}
            {main}
            {footer}
          </>
      </Col>

      <Col className="col-lg-2 col-md-1 col-sm-1 d-none d-sm-flex"></Col>
    </Row>
  );
};

export default Frame;
