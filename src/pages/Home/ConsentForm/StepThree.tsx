/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';
import { PATHS } from 'src/paths';
import { Button, Icon } from 'src/components';

const StepThree = () => (
  <div css={{ display: 'flex', alignItems: 'center', flexDirection: 'column', margin: '0 auto', maxWidth: '300px' }}>
    <Button css={{ width: '50px', height: '50px', borderRadius: '50%', margin: '48px auto 0', padding: 0 }}>
      <Icon icon="clipboard-checked" size={20} />
    </Button>

    <p css={{ marginTop: '24px', textAlign: 'center' }}>Thank you, you consent has been successfully saved</p>
    <Link to={PATHS.CONSENTS} css={{ marginTop: '48px', fontWeight: 'bold', color: '#787878' }}>
      View all consents
    </Link>
  </div>
);

export default StepThree;
