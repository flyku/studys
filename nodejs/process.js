/*console.log(process)

process {
	title: 'D:\\nodejs\\node.exe',
	version: 'v7.10.0', //nidejs版本
	moduleLoadList: ['Binding contextify',
		'Binding natives',
		'NativeModule events',
		'Binding config',
		'Binding icu',
		'NativeModule util',
		'Binding uv',
		'NativeModule buffer',
		'Binding buffer',
		'Binding util',
		'NativeModule internal/util',
		'NativeModule internal/buffer',
		'NativeModule timers',
		'Binding timer_wrap',
		'NativeModule internal/linkedlist',
		'NativeModule assert',
		'NativeModule internal/process',
		'NativeModule internal/process/warning',
		'NativeModule internal/process/next_tick',
		'NativeModule internal/process/promises',
		'NativeModule internal/process/stdio',
		'Binding constants',
		'NativeModule internal/url',
		'NativeModule internal/querystring',
		'Binding url',
		'NativeModule querystring',
		'NativeModule os',
		'Binding os',
		'NativeModule path',
		'NativeModule module',
		'NativeModule internal/module',
		'NativeModule vm',
		'NativeModule fs',
		'Binding fs',
		'NativeModule stream',
		'NativeModule internal/streams/legacy',
		'NativeModule _stream_readable',
		'NativeModule internal/streams/BufferList',
		'NativeModule _stream_writable',
		'NativeModule _stream_duplex',
		'NativeModule _stream_transform',
		'NativeModule _stream_passthrough',
		'Binding fs_event_wrap',
		'NativeModule internal/fs',
		'NativeModule console',
		'Binding tty_wrap',
		'NativeModule net',
		'NativeModule internal/net',
		'Binding cares_wrap',
		'Binding tcp_wrap',
		'Binding pipe_wrap',
		'Binding stream_wrap'
	],
	versions: { //nodejs版本及其以来的版本
		http_parser: '2.7.0',
		node: '7.10.0',
		v8: '5.5.372.43',
		uv: '1.11.0',
		zlib: '1.2.11',
		ares: '1.10.1-DEV',
		modules: '51',
		openssl: '1.0.2k',
		icu: '58.2',
		unicode: '9.0',
		cldr: '30.0.3',
		tz: '2016j'
	},
	arch: 'x64',
	platform: 'win32', //为当前运行nodejs的平台 有darwin、freebsd、linux、sunos、或者win32
	release: {
		name: 'node',
		sourceUrl: 'https://nodejs.org/download/release/v7.10.0/node-v7.10.0.tar.gz',
		headersUrl: 'https://nodejs.org/download/release/v7.10.0/node-v7.10.0-headers.tar.gz',
		libUrl: 'https://nodejs.org/download/release/v7.10.0/win-x64/node.lib'
	},
	argv: [
		'D:\\nodejs\\node.exe', //第一个元素为node，第二个元素为运行的脚本文件，从第三个开始为其他命令行参数
		'C:\\Users\\Administrator\\Desktop\\study\\nodejs\\process.js'
	],
	execArgv: [],
	env: {
		HOMEPATH: '\\Users\\Administrator',
		LOGONSERVER: '\\\\6TQT157O99170R6',
		ALLUSERSPROFILE: 'C:\\ProgramData',
		USERNAME: 'Administrator',
		PROGRAMFILES: 'C:\\Program Files',
		TMP: 'C:\\Users\\Administrator\\AppData\\Local\\Temp',
		USERDOMAIN: '6TQT157O99170R6',
		SYSTEMDRIVE: 'C:',
		PATH: 'C:\\windows\\system32;C:\\windows;C:\\windows\\System32\\Wbem;C:\\windows\\System32\\WindowsPowerShell\\v1.0\\;D:\\nodejs\\;C:\\Program Files\\TortoiseGit\\bin;D:\\install\\git\\Git\\cmd;C:\\Users\\Administrator\\AppData\\Roaming\\npm;D:\\install\\nodejs;D:\\install\\git\\Git\\bin;D:\\install\\DriverGenius;D:\\install\\DriverGenius\\ksoft',
		LOCALAPPDATA: 'C:\\Users\\Administrator\\AppData\\Local',
		PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC',
		PROCESSOR_ARCHITECTURE: 'AMD64',
		WINDOWS_TRACING_LOGFILE: 'C:\\BVTBin\\Tests\\installpackage\\csilogfile.log',
		COMMONPROGRAMFILES: 'C:\\Program Files\\Common Files',
		PSMODULEPATH: 'C:\\windows\\system32\\WindowsPowerShell\\v1.0\\Modules\\',
		'PROGRAMFILES(X86)': 'C:\\Program Files (x86)',
		OS: 'Windows_NT',
		'COMMONPROGRAMFILES(X86)': 'C:\\Program Files (x86)\\Common Files',
		WINDOWS_TRACING_FLAGS: '3',
		USERPROFILE: 'C:\\Users\\Administrator',
		NUMBER_OF_PROCESSORS: '4',
		FP_NO_HOST_CHECK: 'NO',
		PUBLIC: 'C:\\Users\\Public',
		WINDIR: 'C:\\windows',
		PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 60 Stepping 3, GenuineIntel',
		PROGRAMW6432: 'C:\\Program Files',
		TEMP: 'C:\\Users\\Administrator\\AppData\\Local\\Temp',
		HOMEDRIVE: 'C:',
		SYSTEMROOT: 'C:\\windows',
		PROCESSOR_REVISION: '3c03',
		PROGRAMDATA: 'C:\\ProgramData',
		APPDATA: 'C:\\Users\\Administrator\\AppData\\Roaming',
		'ASL.LOG': 'Destination=file',
		COMMONPROGRAMW6432: 'C:\\Program Files\\Common Files',
		SESSIONNAME: 'Console',
		COMPUTERNAME: '6TQT157O99170R6',
		COMSPEC: 'C:\\windows\\system32\\cmd.exe',
		PROCESSOR_LEVEL: '6'
	},
	pid: 27472,
	features: {
		debug: false,
		uv: true,
		ipv6: true,
		tls_npn: true,
		tls_alpn: true,
		tls_sni: true,
		tls_ocsp: true,
		tls: true
	},
	_needImmediateCallback: false,
	execPath: 'D:\\nodejs\\node.exe', //为用来运行应用程序的可执行文件的绝对路径
	debugPort: 5858,
	_startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
	_stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
	_getActiveRequests: [Function: _getActiveRequests],
	_getActiveHandles: [Function: _getActiveHandles],
	reallyExit: [Function: reallyExit],
	abort: [Function: abort],
	chdir: [Function: chdir],
	cwd: [Function: cwd],
	umask: [Function: umask],
	_kill: [Function: _kill],
	_debugProcess: [Function: _debugProcess],
	_debugPause: [Function: _debugPause],
	_debugEnd: [Function: _debugEnd],
	hrtime: [Function: hrtime],
	cpuUsage: [Function: cpuUsage],
	dlopen: [Function: dlopen],
	uptime: [Function: uptime],
	memoryUsage: [Function: memoryUsage],
	binding: [Function: binding],
	_linkedBinding: [Function: _linkedBinding],
	_setupDomainUse: [Function: _setupDomainUse],
	_events: {
		warning: [Function],
		newListener: [Function],
		removeListener: [Function]
	},
	_rawDebug: [Function],
	_eventsCount: 3,
	domain: null,
	_maxListeners: undefined,
	_fatalException: [Function],
	_exiting: false,
	assert: [Function],
	config: {
		target_defaults: {
			cflags: [],
			default_configuration: 'Release',
			defines: [],
			include_dirs: [],
			libraries: []
		},
		variables: {
			asan: 0,
			coverage: false,
			debug_devtools: 'node',
			force_dynamic_crt: 0,
			host_arch: 'x64',
			icu_data_file: 'icudt58l.dat',
			icu_data_in: '..\\..\\deps/icu-small\\source/data/in\\icudt58l.dat',
			icu_endianness: 'l',
			icu_gyp_path: 'tools/icu/icu-generic.gyp',
			icu_locales: 'en,root',
			icu_path: 'deps/icu-small',
			icu_small: true,
			icu_ver_major: '58',
			node_byteorder: 'little',
			node_enable_d8: false,
			node_enable_v8_vtunejit: false,
			node_install_npm: true,
			node_module_version: 51,
			node_no_browser_globals: false,
			node_prefix: '/usr/local',
			node_release_urlbase: 'https://nodejs.org/download/release/',
			node_shared: false,
			node_shared_cares: false,
			node_shared_http_parser: false,
			node_shared_libuv: false,
			node_shared_openssl: false,
			node_shared_zlib: false,
			node_tag: '',
			node_use_bundled_v8: true,
			node_use_dtrace: false,
			node_use_etw: true,
			node_use_lttng: false,
			node_use_openssl: true,
			node_use_perfctr: true,
			node_use_v8_platform: true,
			openssl_fips: '',
			openssl_no_asm: 0,
			shlib_suffix: 'so.51',
			target_arch: 'x64',
			v8_enable_gdbjit: 0,
			v8_enable_i18n_support: 1,
			v8_inspector: true,
			v8_no_strict_aliasing: 1,
			v8_optimized_debug: 0,
			v8_random_seed: 0,
			v8_use_snapshot: true,
			want_separate_host_toolset: 0,
			want_separate_host_toolset_mkpeephole: 0
		}
	},
	emitWarning: [Function],
	nextTick: [Function: nextTick],
	_tickCallback: [Function: _tickCallback],
	_tickDomainCallback: [Function: _tickDomainCallback],
	stdout: [Getter],
	stderr: [Getter],
	stdin: [Getter],
	openStdin: [Function],
	exit: [Function],
	kill: [Function],
	argv0: 'node',
	mainModule: Module {
		id: '.',
		exports: {},
		parent: null,
		filename: 'C:\\Users\\Administrator\\Desktop\\study\\nodejs\\process.js',
		loaded: false,
		children: [],
		paths: ['C:\\Users\\Administrator\\Desktop\\study\\nodejs\\node_modules',
			'C:\\Users\\Administrator\\Desktop\\study\\node_modules',
			'C:\\Users\\Administrator\\Desktop\\node_modules',
			'C:\\Users\\Administrator\\node_modules',
			'C:\\Users\\node_modules',
			'C:\\node_modules'
		]
	}
}*/


// process.stdin与process.stdout的应用
process.stdin.resume();
process.stdin.on('data', function(chunk) {
	process.stdout.write("进程接收导数据" + chunk);
});
// 打开命令行运行 node process.js 命令行中输入任何字符  看输出

// process.argv的代码示例  命令行参数
process.argv.forEach(function(val, index, array) {
	console.log(index + ':' + val);
})

//获取进程的内存使用量
process.memoryUsage();




































