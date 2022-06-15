import { useRef, useState } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";

function FooterNItem1() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem2() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>서비스</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem3() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem4() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem5() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem6() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem7() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

function FooterNItem8() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Button onClick={handleClick}>쇼핑 및 알아보기</Button>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">쇼핑 및 알아보기</Popover.Header>
          <Popover.Body>스토어</Popover.Body>
          <Popover.Body>Mac</Popover.Body>
          <Popover.Body>iPad</Popover.Body>
          <Popover.Body>iPhone</Popover.Body>
          <Popover.Body>Watch</Popover.Body>
          <Popover.Body>AirPods</Popover.Body>
          <Popover.Body>TV 및 홈</Popover.Body>
          <Popover.Body>AirTag</Popover.Body>
          <Popover.Body>액세서리</Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

const FooterN = () => {
  return (
    (<FooterNItem1 />),
    (<FooterNItem2 />),
    (<FooterNItem3 />),
    (<FooterNItem4 />),
    (<FooterNItem5 />),
    (<FooterNItem6 />),
    (<FooterNItem7 />),
    (<FooterNItem8 />)
  );
};
export default FooterN;
