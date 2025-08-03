# App Templates Repository - Claude Code Guide

## Overview

This repository contains a collection of reusable application templates for various frameworks and use cases. When working with this repository, follow these guidelines to maintain consistency and quality.

## Senior Engineering Standards

As a senior engineer, you must:

1. **Always use the latest stable versions** of all libraries and frameworks
2. **Follow current best practices** for each technology stack
3. **Regularly check for updates** using tools like `npm-check-updates` or equivalent
4. **Ensure compatibility** between dependencies before updating
5. **Apply modern patterns** and avoid deprecated approaches
6. **Prioritize security** by keeping dependencies up-to-date
7. **Use type-safe configurations** when available (e.g., ESLint's defineConfig)
8. **Implement proper error handling** and edge cases
9. **Write clean, maintainable code** that follows SOLID principles
10. **Consider performance implications** of architectural decisions

## Working with Templates

### Creating a New Template

When creating a new template:

1. Create a new directory with a descriptive name (e.g., `nextjs-tailwind-auth`, `express-mongodb-api`)
2. Include a comprehensive README.md in the template directory
3. Ensure the template is self-contained and can be easily copied
4. Remove any sensitive data, API keys, or personal information
5. Include appropriate `.gitignore` files
6. Add example configuration files with clear placeholders

### Template Structure

Each template should follow this structure:

```
template-name/
├── README.md           # Template-specific documentation
├── .gitignore          # Appropriate ignore patterns
├── .env.example        # Environment variables template (if needed)
├── package.json        # Dependencies and scripts
└── src/               # Source code
```

### Best Practices

1. **Dependencies**: 
   - Use the latest stable versions of dependencies
   - Run `npx npm-check-updates` to verify versions are current
   - Test thoroughly after updates
   - Document any version constraints

2. **Code Style**: 
   - Follow established conventions for the framework
   - Use modern syntax and features (ES2022+, latest TypeScript)
   - Configure linters with strict rules
   - Apply consistent formatting

3. **Documentation**: 
   - Each template must have clear setup instructions
   - Include troubleshooting sections
   - Document all configuration options
   - Provide migration guides for major updates

4. **Examples**: 
   - Include example usage and common customizations
   - Show both basic and advanced use cases
   - Demonstrate error handling
   - Include performance optimization tips

5. **Testing**: 
   - Include comprehensive test setup
   - Write tests for edge cases
   - Aim for high code coverage
   - Use modern testing frameworks

## Common Commands

### When asked to create a new template:

1. First understand the requirements thoroughly
2. Create the template directory structure
3. Implement the basic functionality
4. Add comprehensive documentation
5. Test the template can be used independently

### When updating existing templates:

1. **Check for updates**: Run `npx npm-check-updates` first
2. **Review breaking changes**: Read changelogs for major version updates
3. **Update incrementally**: Update one major dependency at a time
4. **Test thoroughly**: Run all tests and manual checks
5. **Update documentation**: Reflect any API or configuration changes
6. **Consider migration**: Provide migration guides for breaking changes
7. **Verify compatibility**: Ensure all dependencies work together
8. **Update examples**: Ensure all examples use the latest syntax

## File Naming Conventions

- Use kebab-case for directory names
- Use appropriate naming for each framework (e.g., PascalCase for React components)
- Keep names descriptive but concise

## Documentation Standards

Every template should include:

1. **Purpose**: What the template is for
2. **Prerequisites**: Required tools and knowledge
3. **Quick Start**: Step-by-step setup instructions
4. **Features**: List of included features
5. **Customization**: How to modify for specific needs
6. **Deployment**: Basic deployment instructions

## Important Notes

- Never commit sensitive data or credentials
- Always test templates in a fresh environment before committing
- Maintain consistency across similar templates
- Keep templates minimal but functional
- Focus on developer experience and ease of use
- **Always verify latest versions**: Before finalizing any template, check that all dependencies are up-to-date
- **Follow ecosystem trends**: Stay aware of deprecations and new best practices
- **Security first**: Regularly audit dependencies for vulnerabilities
- **Performance matters**: Choose efficient libraries and patterns
- **Type safety**: Prefer TypeScript and type-safe configurations