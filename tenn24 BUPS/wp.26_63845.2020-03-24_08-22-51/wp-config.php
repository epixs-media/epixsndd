<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'epixsndd_wp49934');

/** MySQL database username */
define('DB_USER', 'epixsndd_wp49934');

/** MySQL database password */
define('DB_PASSWORD', '.p4(6cAS37');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'x1ose4477dx9kufv8xwdtvislbdbhiqzcd9y7xjvgdng1pt7regaq8pz5rhyu8ak');
define('SECURE_AUTH_KEY',  'l0q4jvn7j1mzdh2hmpzq4gtk0oekz3d0tntw1x2vf6km9wc3ht6w2ok0prl0dugq');
define('LOGGED_IN_KEY',    '6xqu5vbs0jdi9yhpt3vguyh2mrtvq7ixytkrtydgnxfgqlswu9zcww05insmyv82');
define('NONCE_KEY',        'm5xt9c4fvyvmyfp9osp3dh5sa3mrsgyonecrc2oe3egli9zxy32roghfdmzukngk');
define('AUTH_SALT',        'yjqpacf54r7v3a6gpeaodbtbaah4icpvkxoyjpclblu0ddtsi0mgwrju7bksgyxt');
define('SECURE_AUTH_SALT', 'u4jxjlxygz3fg3az9iflqi2fefbqgvkmfadyvpn3lpgmqxfp6gwuochtru4ag6oe');
define('LOGGED_IN_SALT',   '1gg5vmsxvopa2g03kpdk8igdij301pk03qernyocl44ylv7zxshighokh7qr5z9r');
define('NONCE_SALT',       'jra9yoetmq6udsrrt4gyvxhpiifznkiuhhlggyg1lhm3xoytzbqmdfqabwwqoaes');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp3d_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

define( 'AUTOSAVE_INTERVAL', 300 );
define( 'WP_POST_REVISIONS', 5 );
define( 'EMPTY_TRASH_DAYS', 7 );
define( 'WP_CRON_LOCK_TIMEOUT', 120 );
/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
