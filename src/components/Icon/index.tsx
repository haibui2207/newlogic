import IcoMoon, { IconProps } from 'react-icomoon';
import iconSet from '../../assets/font-icons/selection.json';

const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} css={{ flex: 'none' }} {...props} />;

export default Icon;
