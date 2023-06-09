module.exports = (plop) => {
  // COMPONENT GENERATOR
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Type of component?',
        choices: () => ['atoms', 'molecules', 'organisms', 'templates'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],

    actions() {
      const actions = [];

      actions.push(
        {
          type: 'add',
          path: 'components/{{type}}/{{pascalCase name}}/index.tsx',
          templateFile: 'plop-templates/component/index.tsx.hbs',
        },
      );
      return actions;
    },
  });
  
  plop.setHelper('classNameComponent', (type) => {
    if (type === 'atoms') {
      return 'a-';
    }
    if (type === 'molecules') {
      return 'm-';
    }
    if (type === 'organisms') {
      return 'o-';
    }
    if (type === 'templates') {
      return 't-';
    }
    return '';
  });

  // plop.setGenerator('service', {
  //   description: 'Create service',
  //   prompts: [
  // 	 {
  // 		type: 'input',
  // 		name: 'name',
  // 		message: 'What is your service name?',
  // 	 },
  //   ],
  //   actions: [
  // 	 {
  // 		type: 'add',
  // 		path: 'src/services/{{camelCase name}}.js',
  // 		templateFile: 'plop-templates/service.js.hbs',
  // 	 },
  // 	 {
  // 		type: 'add',
  // 		path: 'src/services/index.js',
  // 		templateFile: 'plop-templates/injectable-index.js.hbs',
  // 		skipIfExists: true,
  // 	 },
  // 	 {
  // 		type: 'append',
  // 		path: 'src/services/index.js',
  // 		pattern: `/* PLOP_INJECT_IMPORT */`,
  // 		template: `import {{camelCase name}} from './{{camelCase name}}';`,
  // 	 },
  // 	 {
  // 		type: 'append',
  // 		path: 'src/services/index.js',
  // 		pattern: `/* PLOP_INJECT_EXPORT */`,
  // 		template: `t{{camelCase name}},`,
  // 	 }
  //   ],
  // })

  // plop.setGenerator('hook', {
  //   description: 'Create a custom react hook',
  //   prompts: [
  // 	 {
  // 		type: 'input',
  // 		name: 'name',
  // 		message: 'What is your hook name?',
  // 	 },
  //   ],
  //   actions: [
  // 	 {
  // 		type: 'add',
  // 		path: 'src/hooks/{{camelCase name}}.js',
  // 		templateFile: 'plop-templates/hook.js.hbs',
  // 	 },
  // 	 {
  // 		type: 'add',
  // 		path: 'src/hooks/index.js',
  // 		templateFile: 'plop-templates/injectable-index.js.hbs',
  // 		skipIfExists: true,
  // 	 },
  // 	 {
  // 		type: 'append',
  // 		path: 'src/hooks/index.js',
  // 		pattern: `/* PLOP_INJECT_IMPORT */`,
  // 		template: `import {{camelCase name}} from './{{camelCase name}}';`,
  // 	 },
  // 	 {
  // 		type: 'append',
  // 		path: 'src/hooks/index.js',
  // 		pattern: `/* PLOP_INJECT_EXPORT */`,
  // 		template: `t{{camelCase name}},`,
  // 	 }
  //   ],
  // })
};