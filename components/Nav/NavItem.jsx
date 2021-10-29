import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { dropItemAnim } from '../../src/animation';

function NavItem({ target, name }) {
  const { pathname } = useRouter();
  return (
    <motion.li variants={dropItemAnim}>
      <Link style={{}} href={`/${target}`} scroll={false}>
        <a className={pathname === `/${target}` ? 'active a-link' : 'a-link'}>
          {name}
        </a>
      </Link>
    </motion.li>
  );
}

export default NavItem;
