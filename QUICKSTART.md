# Quick Start Guide

## Initial Setup

### 1. Clone and Navigate
```bash
cd TelEM_Healthcare_Website
```

### 2. Set Up Python Environment
```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate  # On macOS/Linux
# or
venv\Scripts\activate  # On Windows

# Install dependencies
pip install -r requirements.txt
```

### 3. Configure Environment Variables
```bash
# Copy example environment file
cp .env.example .env

# Edit .env with your actual credentials
nano .env  # or use your preferred editor
```

### 4. Set Up Git (if not already initialized)
```bash
git init
git add .
git commit -m "Initial project setup"
```

## Creating Your First Task

### Step 1: Create a Directive

Create a new file in `directives/` using the template:

```bash
cp directives/_template.md directives/my_task.md
```

Edit `directives/my_task.md` with your specific requirements.

### Step 2: Create or Use an Execution Script

Either use an existing script from `execution/` or create a new one:

```bash
cp execution/_template.py execution/my_script.py
```

Customize the script for your specific task.

### Step 3: Run the Task

Execute your script:

```bash
python execution/my_script.py --arg1 value1
```

### Step 4: Let the AI Orchestrate

Simply tell the AI agent (Claude, Gemini, etc.):

> "Follow the directive in directives/my_task.md"

The AI will:
1. Read the directive
2. Understand the requirements
3. Execute the appropriate scripts
4. Handle errors through self-annealing
5. Update the directive with learnings

## Common Workflows

### Building a Website Component

1. **Create Design Directive**:
   ```bash
   # Create directives/design_homepage.md
   ```
   Define the 5 core dimensions:
   - Pattern & Layout
   - Style & Aesthetic
   - Color & Theme
   - Typography
   - Animations & Interactions

2. **Build Component**:
   Tell the AI: "Build the homepage based on directives/design_homepage.md"

3. **Iterate**: The AI will handle implementation, testing, and refinement

### Scraping or API Integration

1. **Create Integration Directive**:
   ```bash
   # Create directives/fetch_data.md
   ```

2. **Create Execution Script**:
   ```bash
   # Create execution/fetch_data.py
   ```

3. **Run**: The AI orchestrates the data fetching and processing

### Database Operations

1. **Define Schema in Directive**
2. **Create Migration Script**
3. **Execute via AI orchestration**

## File Organization Rules

### Deliverables
- Must be **cloud-accessible** (Google Docs, Sheets, Slides, etc.)
- Permanent and shareable
- Examples: Final reports, designs, presentations

### Intermediates
- Stored in `.tmp/`
- Temporary processing artifacts
- Disposable and regenerable
- Examples: Raw API responses, processing logs

## Self-Annealing When Things Break

When an error occurs:

1. **Read the error** carefully
2. **Fix the script or process**
3. **Test again** (unless it costs credits)
4. **Update the directive** with learnings
5. **Proceed** with a stronger system

## Tips for Success

### ✓ Do:
- Check `execution/` for existing tools before creating new ones
- Ask clarifying questions when uncertain
- Keep solutions simple and focused
- Update directives with learnings
- Use cloud deliverables for final outputs

### ✗ Don't:
- Guess silently when requirements are unclear
- Over-engineer solutions
- Add unrequested features
- Commit sensitive files (check `.gitignore`)
- Store final deliverables locally

## Getting Help

1. **Read the instructions**: [CLAUDE.md](CLAUDE.md)
2. **Check existing directives**: `directives/`
3. **Review execution scripts**: `execution/`
4. **Ask the AI**: "What directives are available?" or "How do I [task]?"

## Next Steps

1. **Review** [CLAUDE.md](CLAUDE.md) for detailed agent instructions
2. **Create your first directive** for your specific task
3. **Let the AI orchestrate** the execution
4. **Iterate and improve** through self-annealing

---

**Remember**: The system gets stronger with each error corrected and each directive improved. Start simple, iterate, and let the architecture guide you toward reliable, deterministic execution.
