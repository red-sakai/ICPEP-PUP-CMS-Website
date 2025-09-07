# Contribution Guidelines

Thank you for contributing to this project!  
Please follow these guidelines so our workflow stays smooth and consistent.

---

## 🛠 Workflow

1. **Create a branch** from `main`:
   - Use the format:  
     ```
     <type>/<short-description>
     ```
     Example: `feat/login-page`, `fix/navbar-bug`.

2. **Work on your changes** in your branch.

3. **Commit using Conventional Commits** (see below).

4. **Open a Pull Request (PR)**:
   - Link it to the related issue on GitHub Projects.
   - At least one teammate must review before merging.

---

## ✍️ Commit Rules

We use [Conventional Commits](https://www.conventionalcommits.org/) to keep messages clear.

**Format:**
<type>(optional scope): <short description>

markdown
Copy code

**Examples:**
- `feat(auth): add JWT login`
- `fix(ui): correct navbar alignment`
- `docs(readme): update setup instructions`
- `refactor(api): simplify user controller`

**Types we use:**
- `feat` → new feature
- `fix` → bug fix
- `docs` → documentation only
- `refactor` → code restructuring without feature/bug changes
- `chore` → maintenance, setup, dependencies
- `style` → code style changes (no logic impact)
- `test` → add or update tests

---

## ✅ Pull Request Checklist
Before marking your PR as ready:
- [ ] My code follows the style guidelines of this project
- [ ] I used the correct branch naming format
- [ ] I wrote commits following Conventional Commits
- [ ] I linked the PR to its issue on GitHub Projects
- [ ] I tested my changes locally

---

## 🧩 Code Reviews
- Be constructive and respectful in feedback.  
- Approve only when the code is working, clean, and tested.
