import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { dropItemAnim } from '../../src/animation';

function NavItem({ target, name, className }) {
  const { pathname } = useRouter();
  return (
    <motion.li variants={dropItemAnim} className={className}>
      <Link style={{}} href={`/${target}`} scroll={false}>
        <a className={pathname === `/${target}` ? 'active a-link' : 'a-link'}>
          {name}
        </a>
      </Link>
    </motion.li>
  );
}

export default NavItem;
