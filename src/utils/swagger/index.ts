import expressJSDocSwagger from 'express-jsdoc-swagger';
const options = {
    info: {
        version: '1.0.0',
        title: '学生管理系统',
        license: {
            name: '学生管理系统API',
        },
        description:"管理学生疫情情况。。。。"
    },
    security: {
        BearerAuth: {
            type: 'http',
            scheme: 'bearer',
          },
    },
    baseDir: __dirname,
    // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
    filesPattern: ['../../controllers/*.ts','../../models/*.ts','../../services/*.ts'],
    // URL where SwaggerUI will be rendered
    swaggerUIPath: '/swagger',
   
};
export function swagger(app) {
    expressJSDocSwagger(app)(options);
}