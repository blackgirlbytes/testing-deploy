import{r as s}from"./chunk-K6CSEXPM-BYW8Kyoh.js";/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r=(...n)=>n.filter((e,t,o)=>!!e&&e.trim()!==""&&o.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:o,className:a="",children:i,iconNode:d,...l},p)=>s.createElement("svg",{ref:p,...h,width:e,height:e,stroke:n,strokeWidth:o?Number(t)*24/Number(e):t,className:r("lucide",a),...l},[...d.map(([u,m])=>s.createElement(u,m)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(n,e)=>{const t=s.forwardRef(({className:o,...a},i)=>s.createElement(f,{ref:i,iconNode:e,className:r(`lucide-${g(n)}`,o),...a}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.471.2 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ka=v("Check",$),y="content-image-resize",b="Resize Image with Aspect Ratio",_="Resize an image while maintaining aspect ratio and quality",w="Productivity",k=["developer","computercontroller"],x="Resize my image {image_path} to be {width}x{height} pixels. Maintain the aspect ratio and image quality",A=`This will:
- Process the image file
- Resize to specified dimensions while maintaining aspect ratio
- Preserve image quality
- Save the processed image`,C=["image","resize","processing","media"],T="GooseAI Team",I="2025-03-13",S="2025-03-13",U=0,E=0,R=!0,L={image_path:{description:"Path to the image file to be resized",required:!0},width:{description:"Desired width in pixels",required:!0},height:{description:"Desired height in pixels",required:!0}},q={id:y,title:b,description:_,category:w,function:"content",extensions:k,prompt:x,example:A,tags:C,author:T,dateAdded:I,lastUpdated:S,rating:U,usageCount:E,verified:R,variables:L},j="content-youtube-to-blog",P="Convert YouTube Video to Blog Post",M="Generate a blog post from a YouTube video transcript",z="Productivity",G=["youtube-transcript"],N=!0,D="https://github.com/jkawamoto/mcp-youtube-transcript",O="Get the transcript from this youtube video [link to video]. Then, summarize it into a blog post.",B=`This will:
1. Extract the transcript from the provided YouTube video
2. Analyze the content
3. Generate a well-structured blog post with:
   - An engaging title
   - Key points from the video
   - Main takeaways
   - Proper formatting and structure`,F=["youtube","content","blog","writing","transcription"],J="GooseAI Team",H="2025-03-14",W="2025-03-14",V=0,Y=0,Q=!0,K={video_url:{description:"The URL of the YouTube video to transcribe",required:!0}},X={id:j,title:P,description:M,category:z,function:"content",extensions:G,external:N,extensionUrl:D,prompt:O,example:B,tags:F,author:J,dateAdded:H,lastUpdated:W,rating:V,usageCount:Y,verified:Q,variables:K},Z="data-incident-analysis",ee="Analyze PagerDuty Incident Patterns",te="Analyze incident data to identify patterns and opportunities for reducing alert noise",ne="Technical",oe=["computercontroller"],ie=`Analyze the PagerDuty incident activity data to:
1. Identify most frequent issues and their patterns
2. Calculate incident frequencies and trends
3. Determine if issues are ongoing or resolved
4. Highlight top opportunities to reduce alert noise
5. Generate recommendations for alert optimization

The analysis should focus on actionable insights to reduce unnecessary pages and improve on-call experience.`,se=`For a file incident_activity.csv containing PagerDuty export data, the analysis will show:
- Top 5 most frequent incident types
- Incident frequency trends over time
- Active vs resolved issue breakdown
- Recommendations for alert tuning
- Potential automation opportunities

This helps teams identify which alerts need adjustment and where to focus improvement efforts.`,ae=["pagerduty","incidents","alerts","analysis","oncall","monitoring"],re="GooseAI Team",ce="2025-03-14",de="2025-03-14",le=0,pe=0,ue=!0,me={data_file:{description:"Path to the PagerDuty incident activity CSV file",required:!0},time_period:{description:"Time period to analyze (e.g., 'last 30 days', 'last quarter')",required:!1}},ge={id:Z,title:ee,description:te,category:ne,function:"data",extensions:oe,prompt:ie,example:se,tags:ae,author:re,dateAdded:ce,lastUpdated:de,rating:le,usageCount:pe,verified:ue,variables:me},he="data-name-column-split",fe="Clean Excel Data",ve="Automatically organize messy data by splitting and reformatting columns",$e="Technical",ye=["computercontroller","google_drive","developer"],be=`I'll help you split the names in Column C into separate First Name and Last Name columns. Let me analyze and modify your spreadsheet:

1. First, I'll check the current structure of your spreadsheet
2. Then I'll create a script to:
   - Read the full names from Column C
   - Split each name into first and last components
   - Keep the first name in Column C
   - Add the last names in Column D
3. Finally, I'll save the changes back to your file

Please provide the path to your Excel file and I'll help you split the names.`,_e=`For a spreadsheet containing:
Column C (Name)
John Smith
Jane Doe

Will be split into:
Column C (First Name) | Column D (Last Name)
John                  | Smith
Jane                  | Doe`,we=["excel","data","spreadsheet","name-splitting","data-cleanup"],ke="GooseAI Team",xe="2025-03-14",Ae="2025-03-14",Ce=0,Te=0,Ie=!0,Se={file_path:{description:"Path to the Excel file",required:!0},worksheet_name:{description:"Name of the worksheet containing the data (optional - will use first worksheet if not specified)",required:!1}},Ue={id:he,title:fe,description:ve,category:$e,function:"data",extensions:ye,prompt:be,example:_e,tags:we,author:ke,dateAdded:xe,lastUpdated:Ae,rating:Ce,usageCount:Te,verified:Ie,variables:Se},Ee="design-figma-to-code",Re="Convert Designs to Code",Le="Convert a Figma design into a web app",qe="Technical",je=`Convert my figma design with file ID 7r0mLHWx2rrjwn79mcNVNE into a webpage. Get specific detailed information and styling about each element and components within each frame. Make sure to implement any interactions or animations and use a placeholder div with a gray background for images.

Some elements are centralized, some are duplicated, make sure to get them correct. And ensure correct alignment and spacing between elements.`,Pe=["design","ui","figma","web-development","frontend"],Me="GooseAI Team",ze="2025-03-13",Ge="2025-03-13",Ne=0,De=0,Oe=!0,Be=["developer","figma"],Fe={id:Ee,title:Re,description:Le,category:qe,function:"design",prompt:je,tags:Pe,author:Me,dateAdded:ze,lastUpdated:Ge,rating:Ne,usageCount:De,verified:Oe,extensions:Be},Je="dev-api-endpoints-analysis",He="Analyze App Endpoints and Interfaces",We="Review application routing configuration and summarize all external interfaces",Ve="Technical",Ye=["developer"],Qe="Please analyze the application's routing configuration found in `config/routes.rb` and summarize all external interfaces, including API endpoints, service integrations, and public routes.",Ke=`This will analyze the routing configuration to show:
- REST/GraphQL API endpoints
- External service integrations
- Public web routes
- Authentication endpoints
- Webhook handlers
- Service-to-service communication paths
- Health check and monitoring endpoints`,Xe=["api","routes","endpoints","interfaces","security","documentation"],Ze="GooseAI Team",et="2025-03-13",tt="2025-03-13",nt=0,ot=0,it=!0,st={config_path:{description:"Path to the routing configuration file (e.g., routes.rb, urls.py, routes.js)",required:!0},framework:{description:"The web framework being used (e.g., Rails, Django, Express)",required:!1}},at={id:Je,title:He,description:We,category:Ve,function:"coding",extensions:Ye,prompt:Qe,example:Ke,tags:Xe,author:Ze,dateAdded:et,lastUpdated:tt,rating:nt,usageCount:ot,verified:it,variables:st},rt="developer-data-model-design",ct="Design and Validate Data Model",dt="Transform requirements into a concrete data model implementation with validation",lt="Technical",pt=["developer"],ut=`I need help designing and prototyping a data model:
1. Here's my verbal description of the data model requirements: We're building a task management system for a software development team. We need to track:
- Projects with multiple tasks
- Task assignments to team members
- Task dependencies
- Time estimates and actual time spent
- Task status changes and history
- Comments and attachments on tasks
- Sprint/milestone assignments

2. Can you help me transform this into a concrete implementation?

3. Let's validate this against the following use cases:
- Team lead creates a new project and adds initial tasks
- Developer updates task status and logs time
- QA adds a blocking issue that depends on another task
- Manager generates sprint velocity report
- Team member adds comments and attachments to tasks
- System needs to track task history for auditing
- Tasks need to be easily searchable by various criteria

4. We'll need to be able to iterate on this design based on our findings`,mt=`This will help create a data model by:
- Analyzing plain English requirements
- Converting to concrete schema/class definitions
- Validating against real use cases
- Iterating based on findings

The output will provide:
1. Database Schema:
\`\`\`sql
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE tasks (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) NOT NULL,
  estimate_hours DECIMAL,
  actual_hours DECIMAL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE task_dependencies (
  task_id UUID REFERENCES tasks(id),
  depends_on_task_id UUID REFERENCES tasks(id),
  PRIMARY KEY (task_id, depends_on_task_id)
);

CREATE TABLE task_assignments (
  task_id UUID REFERENCES tasks(id),
  user_id UUID REFERENCES users(id),
  assigned_at TIMESTAMP NOT NULL,
  PRIMARY KEY (task_id, user_id)
);
\`\`\`

2. Sample Queries:
\`\`\`sql
-- Find all blocking issues
SELECT t.* FROM tasks t
JOIN task_dependencies td ON t.id = td.task_id
WHERE t.status = 'blocked';

-- Calculate sprint velocity
SELECT 
  sprint_id,
  SUM(estimate_hours) as total_estimated,
  SUM(actual_hours) as total_actual
FROM tasks
GROUP BY sprint_id;
\`\`\`

3. Optimization Suggestions:
- Index on task status for quick filtering
- Composite index on (project_id, status) for project views
- Consider partitioning by project_id for large datasets
- Add full-text search for task descriptions

4. Validation Rules:
- Tasks must have at least one assignee
- Cannot create circular dependencies
- Status changes must be logged
- Time entries require comments`,gt=["database","schema","data-modeling","design","architecture","task-management"],ht="GooseAI Team",ft="2025-03-13",vt="2025-03-13",$t=0,yt=0,bt=!0,_t={requirements:{description:"Verbal description of data model requirements",required:!0},use_cases:{description:"List of use cases to validate against",required:!0}},wt={id:rt,title:ct,description:dt,category:lt,function:"coding",extensions:pt,prompt:ut,example:mt,tags:gt,author:ht,dateAdded:ft,lastUpdated:vt,rating:$t,usageCount:yt,verified:bt,variables:_t},kt="generate-storybook-entry",xt="Generate Storybook Entry from Git Diff",At="Generate a Storybook documentation entry based on component changes in git diff",Ct="Technical",Tt=["developer"],It=`Based on the current git diff, please generate a comprehensive Storybook entry for NavBar component that includes:

1. Component description
2. Props documentation
3. Usage examples
4. Edge cases and variations
5. Accessibility considerations

Please format the output in MDX format suitable for Storybook.`,St=`For a Button component git diff showing new props added:

\`\`\`mdx
import { Meta } from '@storybook/blocks';
import { Button } from './Button';

<Meta title="Components/Button" component={Button} />

# Button Component

A versatile button component supporting multiple variants and states.

## Props

- variant: 'primary' | 'secondary' | 'ghost'
- size: 'sm' | 'md' | 'lg'
- disabled: boolean

## Basic Usage

<Button variant="primary">Click me</Button>
\`\`\``,Ut=["storybook","documentation","git","components","react","mdx"],Et="GooseAI Team",Rt="2025-03-13",Lt="2025-03-13",qt=0,jt=0,Pt=!0,Mt={component_name:{description:"Name of the component to document",required:!0}},zt={id:kt,title:xt,description:At,category:Ct,function:"developer",extensions:Tt,prompt:It,example:St,tags:Ut,author:Et,dateAdded:Rt,lastUpdated:Lt,rating:qt,usageCount:jt,verified:Pt,variables:Mt},Gt="documentation-generate-toc",Nt="Generate Table of Contents for Repo",Dt="Generate a logically organized table of contents for a CONTRIBUTING.md file",Ot="Technical",Bt="Analyze the CONTRIBUTING.md file and create a well-structured table of contents. Include all major sections and subsections, using consistent formatting and logical organization.",Ft=`Input: CONTRIBUTING.md with sections about coding standards, PR process, and testing
Output:
1. Getting Started
   1.1 Prerequisites
   1.2 Setup
2. Contributing Process
   2.1 Making Changes
   2.2 Pull Requests
3. Code Standards
   3.1 Style Guide
   3.2 Testing`,Jt=["documentation","markdown","contributing","organization","toc"],Ht="GooseAI Team",Wt="2025-03-13",Vt="2025-03-13",Yt=0,Qt=0,Kt=!0,Xt=["developer"],Zt={file_path:{type:"string",description:"Path to the CONTRIBUTING.md file",required:!0}},en={id:Gt,title:Nt,description:Dt,category:Ot,function:"coding",prompt:Bt,example:Ft,tags:Jt,author:Ht,dateAdded:Wt,lastUpdated:Vt,rating:Yt,usageCount:Qt,verified:Kt,extensions:Xt,variables:Zt},tn="developer-github-branch-pr",nn="Create GitHub Branch and PR",on="Create a new branch, update README, and open a pull request on GitHub",sn="Technical",an=["github"],rn=[{name:"github",link:"https://block.github.io/goose/v1/extensions/github"}],cn='Create a new branch called hello-world in my angiejones/goose-demo repository. Update the README.md file to say "this was written by goose" and commit it. Open a pull request with your changes.',dn=`This will:
- Create new branch 'hello-world'
- Update README.md content
- Commit changes
- Open pull request`,ln=["github","git","branch","pull-request"],pn="GooseAI Team",un="2025-03-14",mn="2025-03-14",gn=0,hn=0,fn=!0,vn={repository:{description:"Repository name in format owner/repo",required:!0},branch_name:{description:"Name of the new branch",required:!0}},$n={id:tn,title:nn,description:on,category:sn,function:"coding",extensions:an,externalExtensions:rn,prompt:cn,example:dn,tags:ln,author:pn,dateAdded:un,lastUpdated:mn,rating:gn,usageCount:hn,verified:fn,variables:vn},yn="developer-jetbrains-java-upgrade",bn="Upgrade Java Project",_n="Upgrade Java project to latest LTS version and refactor using newer features",wn="Technical",kn=["jetbrains"],xn=[{name:"jetbrains",link:"https://block.github.io/goose/v1/extensions/jetbrains"}],An="Using the JetBrains IDE tools, upgrade this project to use the latest Java LTS version and refactor the codebase to use newer Java features where beneficial.",Cn=`This will:
- Update Java version to latest LTS
- Identify refactoring opportunities
- Apply modern Java features
- Update build configuration
- Run tests to verify changes`,Tn=["java","upgrade","refactoring","jetbrains","ide"],In="GooseAI Team",Sn="2025-03-14",Un="2025-03-14",En=0,Rn=0,Ln=!0,qn={project_path:{description:"Path to the Java project",required:!0},target_java_version:{description:"Target Java LTS version (e.g., '17', '21')",required:!0}},jn={id:yn,title:bn,description:_n,category:wn,function:"coding",extensions:kn,externalExtensions:xn,prompt:An,example:Cn,tags:Tn,author:In,dateAdded:Sn,lastUpdated:Un,rating:En,usageCount:Rn,verified:Ln,variables:qn},Pn="developer-js-express-setup",Mn="Scaffold JavaScript Boilerplate",zn="Initialize a new JavaScript project with Express, Mongoose, Nodemon, and Dotenv",Gn="Technical",Nn=["developer"],Dn="Set up a new JavaScript project with Express, Mongoose, Nodemon, and Dotenv. Fetch the latest package versions, generate a README with those versions, and initialize Git",On=`This will:
- Initialize npm project
- Install Express, Mongoose, Nodemon, Dotenv
- Create basic server structure
- Generate README with versions
- Initialize Git repository`,Bn=["javascript","express","mongoose","setup","nodejs"],Fn="GooseAI Team",Jn="2025-03-14",Hn="2025-03-14",Wn=0,Vn=0,Yn=!0,Qn={project_name:{description:"Name of the project",required:!0},project_path:{description:"Path where to create the project",required:!0}},Kn={id:Pn,title:Mn,description:zn,category:Gn,function:"coding",extensions:Nn,prompt:Dn,example:On,tags:Bn,author:Fn,dateAdded:Jn,lastUpdated:Hn,rating:Wn,usageCount:Vn,verified:Yn,variables:Qn},Xn="dev-query-optimization",Zn="Optimize Database Query Performance",eo="Refactor a Ruby query to improve database performance by moving operations from memory to SQL",to="Technical",no=["developer"],oo="The list_records method in app/services/record_service.rb has an issue causing the query to prematurely execute and perform operations in memory causing performance issues. Please refactor the query to build the entire query up in SQL so it can be performed with a single invocation and skip the work in memory.",io=`This will analyze and optimize database queries by:
- Identifying premature query execution
- Moving in-memory operations to SQL
- Consolidating multiple queries into single efficient queries
- Improving overall application performance`,so=["ruby","database","optimization","performance","sql","refactoring"],ao="GooseAI Team",ro="2025-03-13",co="2025-03-13",lo=0,po=0,uo=!0,mo={file_path:{description:"Path to the Ruby file containing the query (e.g., app/services/record_service.rb)",required:!0},method_name:{description:"Name of the method to optimize (e.g., list_records)",required:!0}},go={id:Xn,title:Zn,description:eo,category:to,function:"coding",extensions:no,prompt:oo,example:io,tags:so,author:ao,dateAdded:ro,lastUpdated:co,rating:lo,usageCount:po,verified:uo,variables:mo},ho="dev-roll-plan-analyzer",fo="Analyze Production Change ROLL Plans",vo="Analyze and validate infrastructure change ROLL plans for production environments",$o="Technical",yo=["developer"],bo=`You are an expert in cloud infrastructure, security, and reliability engineering. Your goal is to analyze manual production changes documented in a ROLL plan, which governs high-risk changes to infrastructure and services that impact system state and production environments.
A ROLL plan can contain any formatted change that any team is making that impacts production.
I will provide a reference ROLL plan named
ROLL - SAMPLE.xml, which is a past real-world ROLL plan exported from JIRA. This is for context so you can understand
the structure and details of a typical ROLL plan.
However, the actual ROLL plan you need to analyze will be uploaded separately.`,_o=`This will analyze ROLL plans to evaluate:
- Infrastructure change impact
- Security implications
- Production environment risks
- Change validation steps
- Rollback procedures
- Service dependencies
- System state changes`,wo=["infrastructure","security","production","change-management","roll-plan","reliability"],ko="GooseAI Team",xo="2025-03-14",Ao="2025-03-14",Co=0,To=0,Io=!0,So={roll_plan_path:{description:"Path to the ROLL plan XML file to analyze",required:!0},reference_plan_path:{description:"Path to the reference ROLL plan XML file (optional)",required:!1}},Uo={id:ho,title:fo,description:vo,category:$o,function:"developer",extensions:yo,prompt:bo,example:_o,tags:wo,author:ko,dateAdded:xo,lastUpdated:Ao,rating:Co,usageCount:To,verified:Io,variables:So},Eo="developer-security-patterns",Ro="Learn Security Vulnerability Patterns",Lo="Store and analyze security vulnerability patterns and their relationships",qo="Technical",jo=["knowledge_graph"],Po=[{name:"knowledge_graph",link:"https://block.github.io/goose/v1/extensions/knowledge-graph"}],Mo=`Goose, learn these security vulnerability patterns and their relationships:

1. SQL Injection relates to:
    - Unvalidated database inputs
    - Data theft risks
    - Parameterized query solutions
    
2. XSS Vulnerabilities connect to:
    - Unescaped user output
    - Session hijacking risks
    - Content sanitization fixes

3.Authentication Weaknesses link to:
    - Session management
    - Account compromise
    - JWT-based solutions`,zo=`This will:
- Create nodes for each vulnerability type
- Establish relationships between vulnerabilities and their aspects
- Store prevention techniques
- Build a queryable knowledge graph`,Go=["security","vulnerabilities","knowledge-graph","patterns"],No="GooseAI Team",Do="2025-03-14",Oo="2025-03-14",Bo=0,Fo=0,Jo=!0,Ho={domain:{description:"Security domain to focus on (e.g., 'web', 'mobile', 'api')",required:!1}},Wo={id:Eo,title:Ro,description:Lo,category:qo,function:"coding",extensions:jo,externalExtensions:Po,prompt:Mo,example:zo,tags:Go,author:No,dateAdded:Do,lastUpdated:Oo,rating:Bo,usageCount:Fo,verified:Jo,variables:Ho},Vo="legal-regulatory-comparison",Yo="Regulatory Document Change Analysis",Qo="Run a comparative analysis between different versions of AML regulatory documents",Ko="Business",Xo=`Highlight the differences between these two versions of FinCEN's Investment Adviser AML regulations:

Proposed version (2015): https://www.federalregister.gov/documents/2015/09/01/2015-21318/anti-money-laundering-program-and-suspicious-activity-report-filing-requirements-for-registered

Final version (2024): https://www.federalregister.gov/documents/2024/09/04/2024-19260/financial-crimes-enforcement-network-anti-money-launderingcountering-the-financing-of-terrorism

Focus on key changes in requirements for investment advisers' AML/CFT programs and how they affect compliance obligations.`,Zo=["legal","regulatory","compliance","document-comparison","policy-analysis","financial-services","legislation"],ei="GooseAI Team",ti="2025-03-13",ni="2025-03-13",oi=0,ii=0,si=!0,ai=["computercontroller"],ri=[{name:"document_name",description:"The name/title of the regulatory document being compared",required:!0,type:"string"},{name:"prior_version_url",description:"URL to the previous version of the document",required:!0,type:"string"},{name:"final_version_url",description:"URL to the final/current version of the document",required:!0,type:"string"}],ci={id:Vo,title:Yo,description:Qo,category:Ko,function:"legal",prompt:Xo,tags:Zo,author:ei,dateAdded:ti,lastUpdated:ni,rating:oi,usageCount:ii,verified:si,extensions:ai,variables:ri},di="business-marketing-budget-review",li="Marketing Budget Review Meeting Prep",pi="Prepare for marketing budget review meeting by analyzing Google Drive documents",ui="Business",mi=["google_drive"],gi=[{name:"google_drive",link:"https://block.github.io/goose/v1/extensions/google-drive"}],hi=`I have an important marketing budget review meeting in 30 minutes and I need your help getting prepared. I have several documents in my Google Drive from our previous meetings and planning sessions. Could you help me by:

1. Finding all relevant documents about our marketing budget and performance
2. Giving me a quick summary of our Q1 performance
3. Highlighting the key decisions we need to make about the marketing automation tool and video production
4. Identifying any outstanding action items from our last meeting`,fi=`This will:
- Search Google Drive for marketing budget documents
- Analyze Q1 performance metrics
- Extract key decision points
- List action items from previous meetings`,vi=["marketing","budget","meeting-prep","performance-review"],$i="GooseAI Team",yi="2025-03-14",bi="2025-03-14",_i=0,wi=0,ki=!0,xi={time_period:{description:"Time period for the review (e.g., Q1 2025)",required:!0}},Ai={id:di,title:li,description:pi,category:ui,function:"marketing",extensions:mi,externalExtensions:gi,prompt:hi,example:fi,tags:vi,author:$i,dateAdded:yi,lastUpdated:bi,rating:_i,usageCount:wi,verified:ki,variables:xi},Ci="business-retail-market-monitor",Ti="Monitor Top Retailers Market Activity",Ii="Generate and maintain an automated dashboard tracking top retailers' digital presence and market activities",Si="Business",Ui=["computercontroller","tavily"],Ei=!0,Ri="https://github.com/tavily-ai/tavily-mcp",Li=`1. Search the web for the top 5 most popular retailers.
2. For each identified retailer, generate a comprehensive report on each retailer's:
* Website updates
* New product launches
* Social media engagement
* Recent customer reviews
* Press mentions
3. Generate an HTML dashboard based on findings for each retailer
4. Open the dashboard in a browser
5. Automation Script to pull new results every 30 days`,qi=`This will create a dashboard showing:
- Amazon's latest product launches and website changes
- Walmart's social media engagement metrics
- Target's recent customer sentiment analysis
- Costco's press coverage and news mentions
- Home Depot's promotional activities and updates

The dashboard will auto-update monthly to track changes and trends.

Note: Uses Tavily Web Search's advanced capabilities for comprehensive web results including news, social media, and review sites.`,ji=["retail","market-research","automation","dashboard","competitive-analysis","monitoring","web-search"],Pi="GooseAI Team",Mi="2025-03-13",zi="2025-03-13",Gi=0,Ni=0,Di=!0,Oi={num_retailers:{description:"Number of top retailers to monitor",default:5,required:!1},update_frequency:{description:"How often to update the dashboard in days",default:30,required:!1},dashboard_path:{description:"Path where the dashboard HTML should be saved",default:"retail_dashboard.html",required:!1},search_type:{description:"Tavily Web Search type (comprehensive or news)",default:"comprehensive",required:!1}},Bi={id:Ci,title:Ti,description:Ii,category:Si,function:"marketing",extensions:Ui,external:Ei,extensionUrl:Ri,prompt:Li,example:qi,tags:ji,author:Pi,dateAdded:Mi,lastUpdated:zi,rating:Gi,usageCount:Ni,verified:Di,variables:Oi},Fi="developer-review-prep",Ji="Structure Your Performance Review",Hi="Sort collected feedback into a well-organized performance review",Wi="Productivity",Vi=["developer","google_drive"],Yi=`Create a web app that will take feedback and sort it into custom performance dimensions to populate a performance evaluation. The app should:
- Allow users to define their review dimensions (e.g., Leadership, Technical Skills, Innovation)
- Accept feedback text through input or file upload
- Sort feedback into the defined dimensions
- Export the organized feedback for performance reviews`,Qi=`User defines dimensions like 'Technical Skills', 'Teamwork', 'Innovation'
Inputs feedback: 'Led the migration to cloud services'
App categorizes it under appropriate dimension
Exports organized feedback for review`,Ki=["performance-review","feedback","career-development","self-review"],Xi="GooseAI Team",Zi="2025-03-14",es="2025-03-14",ts=0,ns=0,os=!0,is={dimensions:{description:"List of performance dimensions to sort feedback into",required:!0},feedback_input:{description:"Text or file containing feedback to sort",required:!0}},ss={id:Fi,title:Ji,description:Hi,category:Wi,function:"miscellaneous",extensions:Vi,prompt:Yi,example:Qi,tags:Ki,author:Xi,dateAdded:Zi,lastUpdated:es,rating:ts,usageCount:ns,verified:os,variables:is},as="misc-system-control-research",rs="Control Computer Settings",cs="Automate system settings while conducting parallel research tasks",ds="Productivity",ls=["computercontroller"],ps=`Goose, I need to decompress while researching AI models for tomorrow's meeting. Can you create a relaxing environment and help me research?

1. Play classical music in [your preferred app]
2. Dim screen brightness (2 levels)
3. Research current flagship AI models:
    * Verify availability
    * Collect: release date, features, pricing, context window
    * Use official sources only
4. Create "ai-models-comparison.csv" on desktop with collected data
5. Launch Numbers and open the CSV file
6. Reset brightness and close Safari`,us=`This will:
- Create a relaxing environment with music and adjusted lighting
- Conduct structured research on AI models
- Organize findings in a spreadsheet
- Reset workspace settings

The resulting CSV will contain:
- Model Name
- Release Date
- Key Features
- Pricing Details
- Context Window Size
- Availability Status`,ms=["automation","system-control","research","multitasking","workspace","ai-models"],gs="GooseAI Team",hs="2025-03-14",fs="2025-03-14",vs=0,$s=0,ys=!0,bs={music_app:{description:"Preferred music application (e.g., Spotify, Apple Music)",required:!0},csv_filename:{description:"Name for the CSV file to store research results",required:!1,default:"ai-models-comparison.csv"}},_s={id:as,title:rs,description:cs,category:ds,function:"miscellaneous",extensions:ls,prompt:ps,example:us,tags:ms,author:gs,dateAdded:hs,lastUpdated:fs,rating:vs,usageCount:$s,verified:ys,variables:bs},ws="ops-delivery-tracking",ks="Real-Time Delivery Route Optimization",xs="Monitor delivery routes and automatically optimize them based on real-time traffic conditions",As="Business",Cs="Track the live GPS location of driver ID #{driver_id}. Query Google Maps for real-time traffic data and adjust the estimated delivery time if delays exceed 5 minutes. If ETA changes, update the customer's live tracker and send an SMS notification. If the delay is greater than 20 minutes, check if another driver within a 1-mile radius can take over the delivery.",Ts="Track the live GPS location of driver ID #12345. Query Google Maps for real-time traffic data and adjust the estimated delivery time if delays exceed 5 minutes. If ETA changes, update the customer's live tracker and send an SMS notification. If the delay is greater than 20 minutes, check if another driver within a 1-mile radius can take over the delivery.",Is=["operations","logistics","delivery","route-optimization","automation","real-time-tracking","customer-communication"],Ss="GooseAI Team",Us="2025-03-13",Es="2025-03-13",Rs=0,Ls=0,qs=!0,js=["google_maps"],Ps=[{name:"driver_id",description:"The unique identifier for the driver being tracked",required:!0,type:"string"}],Ms={id:ws,title:ks,description:xs,category:As,function:"operations",prompt:Cs,example:Ts,tags:Is,author:Ss,dateAdded:Us,lastUpdated:Es,rating:Rs,usageCount:Ls,verified:qs,extensions:js,variables:Ps},zs="operations-form-review-automation",Gs="Assign Reviewers to Conference Proposals",Ns="Automatically match incoming conference proposals with relevant track reviewers",Ds="Business",Os=["developer","google_drive"],Bs=`I need help building an automated monitoring system that will:
1. Check an Airtable base every 10 minutes for new form submissions
2. Match each submission with reviewer information stored in a Google Sheet
3. Send me a notification with the submission details and assigned reviewer(s)
4. Auto-dismiss the notification after 5 seconds

Can you help me create this system, starting with setting up the necessary connections to Airtable and Google Sheets?`,Fs=`Example implementation:
- Monitoring conference proposal submissions in Airtable
- Matching with track reviewers in Google Sheets
- Sending desktop notifications like:
  'New proposal: "Machine Learning in Healthcare"
   Track: AI/ML
   Assigned reviewers: Dr. Sarah Chen, Prof. James Wilson
   Abstract length: 500 words'
- Notification disappears after 5 seconds`,Js=["automation","workflow","monitoring","notifications","integration","conference","academic","peer-review","proposal-review","track-management","paper-submissions"],Hs="GooseAI Team",Ws="2025-03-13",Vs="2025-03-13",Ys=0,Qs=0,Ks=!0,Xs={airtable_api_key:{description:"Airtable API key",required:!0},airtable_base_id:{description:"Airtable base ID",required:!0},google_sheets_id:{description:"Google Sheets document ID",required:!0},check_interval:{description:"Interval between checks in minutes",required:!1,default:10},notification_duration:{description:"Duration to show notifications in seconds",required:!1,default:5}},Zs={id:zs,title:Gs,description:Ns,category:Ds,function:"operations",extensions:Os,prompt:Bs,example:Fs,tags:Js,author:Hs,dateAdded:Ws,lastUpdated:Vs,rating:Ys,usageCount:Qs,verified:Ks,variables:Xs},ea="voip-make-call",ta="Make a Phone Call",na="Have goose place a phone call",oa="Business",ia=["vyop"],sa=!0,aa="https://github.com/paulotaylor/voyp-mcp",ra="Please call the number [phone number] and tell a joke",ca=["voip","phone","call","communication"],da="GooseAI Team",la="2025-03-14",pa="2025-03-14",ua=0,ma=0,ga=!0,ha={phone_number:{description:"Phone number to call in international format",required:!0}},fa={id:ea,title:ta,description:na,category:oa,function:"operations",extensions:ia,external:sa,extensionUrl:aa,prompt:ra,tags:ca,author:da,dateAdded:la,lastUpdated:pa,rating:ua,usageCount:ma,verified:ga,variables:ha},va="sales-product-region-lookup",$a="Check Product Availability in Regions",ya="Research which countries and regions a product is available in",ba="Business",_a=`List ISO 3166-1 country codes where {product_name} is sold. Return JSON containing:
country_codes: List of the ISO-3166-1 country codes that are valid for this device
device_model: The model you have performed the lookup for
is_north_america: Whether or not the specified device is expected to acquired easily in north america`,wa=`List ISO 3166-1 country codes where Symphony Innova30 is sold. Return JSON containing:
country_codes: List of the ISO-3166-1 country codes that are valid for this device
device_model: The model you have performed the lookup for
is_north_america: Whether or not the specified device is expected to acquired easily in north america`,ka=["sales","market-research","product","regional-availability","business-development","international"],xa="GooseAI Team",Aa="2025-03-13",Ca="2025-03-13",Ta=0,Ia=0,Sa=!0,Ua=["computercontroller"],Ea=[{name:"product_name",description:"The name/model of the product to look up regional availability for",required:!0,type:"string"}],Ra={id:va,title:$a,description:ya,category:ba,function:"sales",prompt:_a,example:wa,tags:ka,author:xa,dateAdded:Aa,lastUpdated:Ca,rating:Ta,usageCount:Ia,verified:Sa,extensions:Ua,variables:Ea},La="sales-performance-analysis",qa="Monthly Sales Performance Analysis",ja="Analyze monthly sales data to identify top performing stores and significant trends",Pa="Business",Ma=["computercontroller","developer","google_drive"],za="Please review these two documents named {month1} Orders and {month2} Orders. Can you create insights on top performing stores and any significant movements.",Ga=`This will analyze sales data to provide:
- Top performing stores by revenue
- Month-over-month changes in performance
- Significant trends or movements
- Store rankings and comparisons
- Additional relevant business insights

Example output will include comparative analysis between January and February sales data, highlighting:
- Stores with highest revenue
- Biggest movers (positive and negative)
- Pattern analysis
- Recommendations based on findings`,Na=["sales","analysis","performance","retail","trends","comparison"],Da="GooseAI Team",Oa="2025-03-13",Ba="2025-03-13",Fa=0,Ja=0,Ha=!0,Wa={month1:{description:"Name of the first month's document",required:!0},month2:{description:"Name of the second month's document",required:!0}},Va={id:La,title:qa,description:ja,category:Pa,function:"sales",extensions:Ma,prompt:za,example:Ga,tags:Na,author:Da,dateAdded:Oa,lastUpdated:Ba,rating:Fa,usageCount:Ja,verified:Ha,variables:Wa},Ya=Object.assign({"../prompts/roles/content/image-resize.json":q,"../prompts/roles/content/youtube-to-blog.json":X,"../prompts/roles/data/incident-analysis.json":ge,"../prompts/roles/data/name-column-split.json":Ue,"../prompts/roles/design/figma-to-code.json":Fe,"../prompts/roles/developer/api-endpoints-analysis.json":at,"../prompts/roles/developer/data-model-design.json":wt,"../prompts/roles/developer/generate-storybook-entry.json":zt,"../prompts/roles/developer/generate-toc.json":en,"../prompts/roles/developer/github-branch-pr.json":$n,"../prompts/roles/developer/jetbrains-java-upgrade.json":jn,"../prompts/roles/developer/js-express-setup.json":Kn,"../prompts/roles/developer/query-optimization.json":go,"../prompts/roles/developer/roll-plan-analyzer.json":Uo,"../prompts/roles/developer/security-patterns.json":Wo,"../prompts/roles/legal/regulatory-comparison.json":ci,"../prompts/roles/marketing/budget-review.json":Ai,"../prompts/roles/marketing/retail-market-monitor.json":Bi,"../prompts/roles/miscellaneous/performance-review-prep.json":ss,"../prompts/roles/miscellaneous/system-control-research.json":_s,"../prompts/roles/operations/delivery-tracking-automation.json":Ms,"../prompts/roles/operations/form-review-automation.json":Zs,"../prompts/roles/operations/make-phone-call.json":fa,"../prompts/roles/sales/product-region-availability.json":Ra,"../prompts/roles/sales/sales-performance-analysis.json":Va}),c=Object.values(Ya);async function Xa(){return c}async function Za(n){const e=n.toLowerCase();return c.filter(t=>t.title.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.category.toLowerCase().includes(e)||t.function.toLowerCase().includes(e)||t.tags.some(o=>o.toLowerCase().includes(e)))}export{Ka as C,v as c,Xa as f,Za as s};
