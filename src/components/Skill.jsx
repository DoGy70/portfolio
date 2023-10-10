import { styled } from "styled-components";
import Rating from "./Rating";

const Skill = ({ id, skill, icon, rating }) => {
  return (
    <Wrapper>
      <div className="skill">
        <div className="skill-header">
          <div className="icon">{icon}</div>
          <div className="name">{skill}</div>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptas ipsam labore alias nisi expedita dolorem delectus unde ab!
            Ex?
          </p>
        </div>
        <div className="rating">
          <div>skill: {<Rating rating={rating} />}</div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .skill {
    max-width: 360px;
    background: var(--primary-300);
    margin: 2.5rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-1);
    transition: var(--transition);
  }

  .skill:hover {
    box-shadow: var(--shadow-3);
  }

  .skill-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background: var(--primary-100);
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    svg {
      font-size: 50px;
      color: var(--primary-800);
    }
  }

  .name {
    margin-top: -0.5rem;
    text-transform: capitalize;
    font-weight: 600;
  }

  .desc {
    text-align: center;
    max-width: 80%;
    font-size: small;
    letter-spacing: var(--letterSpacing);
  }

  .rating {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: capitalize;
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    height: 40px;
  }

  @media (min-width: 992px) {
    .skill {
      margin-top: 0;
      width: 360px;
    }
  }

  @media (min-width: 1280px) {
    .skill:hover {
      transform: translateY(-1rem);
    }
  }
`;
export default Skill;
