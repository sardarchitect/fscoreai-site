import React from 'react';

const AWSQuickStart = () => {
  return (
    <div>
      <hr />
      <h2 id="title-getting-started-with-aws-subtitle-create-an-aws-account-and-set-up-clisdk-access-date-2020-12-27-imageurl-blogs_imagesimg1png-slug-blogaws-quickstartmd">
        title: "Getting Started with AWS"
        <br />
        subtitle: "Create an AWS account and set up CLI/SDK access."
        <br />
        date: "2020-12-27"
        <br />
        imageURL: "/blogs_images/img1.png"
        <br />
        slug: "/blog/aws-quickstart.md"
      </h2>
      <h1 id="article-one">Article One</h1>
      <p>
        "Cloud computing" plays a vital role in the creation of software products and services. It's also one of the most highly sought-after skills in the tech industry.
      </p>
      <p>
        In fact, most of the projects on this site will require cloud interaction of some sort—particularly with AWS's serverless products.
      </p>
      <h2 id="getting-started">Getting Started</h2>
      <blockquote>
        <p>To use AWS in these projects, we'll need to set up an account, the CLI, and the SDK.</p>
      </blockquote>
      <h3 id="create-an-account">Create an account</h3>
      <p>
        If you don't already have an account then{' '}
        <a href="https://portal.aws.amazon.com/billing/signup#/start">sign up here</a>.
      </p>
      <p>
        Once you are signed up, you should be able to log in to the{' '}
        <a href="https://aws.amazon.com/console/">AWS Console</a>. It might look overwhelming if you're seeing it for the first time.
      </p>
      <h3 id="install-the-cli">Install the CLI</h3>
      <p>
        The AWS CLI is a command-line application that lets you interact with your AWS account from the terminal. It's available on all platforms.
      </p>
      <p>If you are a proficient Python user, you can just install it with <code>pip</code>.</p>
      <pre>
        <code className="language-bash">pip install awscli</code>
      </pre>
      <p>
        Otherwise, check out the{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html">official instructions</a>.
      </p>
      <p>Once installed, you should be able to run this command from the terminal to see its version.</p>
      <pre>
        <code className="language-bash">aws --version</code>
      </pre>
      <h3 id="create-an-iam-user">Create an IAM user</h3>
      <p>
        The CLI will access your AWS account via an "IAM user." You can create one from the <strong>Users</strong> page in your{' '}
        <a href="https://console.aws.amazon.com/iam">IAM console</a>.
      </p>
      <p>Once the user is created, you'll need to generate access keys (passwords, essentially) for it.</p>
      <ul>
        <li>
          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html">Creating an Admin IAM User</a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey">Creating access keys for a user</a>
        </li>
      </ul>
      <p>Your access keys should look something like this:</p>
      <pre>
        <code>
          Access key ID: AKIAIOSFODNN7EXAMPLE
          <br />
          Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
        </code>
      </pre>
      <h3 id="configure-the-cli">Configure the CLI</h3>
      <p>
        Next you need to{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html">configure the CLI</a> so that it can access your AWS account via the IAM user.
      </p>
      <p>Basically, just run this command and paste in your access keys.</p>
      <pre>
        <code className="language-bash">aws configure</code>
      </pre>
      <p>
        Additionally, you'll also be asked for a{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-region">default region</a> and{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-format">default output format</a>.
      </p>
      <p>You may leave them empty—but generally I like to use:</p>
      <pre>
        <code>
          Default region name [None]: us-east-1
          <br />
          Default output format [None]: json
        </code>
      </pre>
      <h3 id="configuration-files">Configuration files</h3>
      <p>
        Once configured, the AWS CLI{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html">saves the credentials</a> and region/format profiles to your computer. They are typically in these locations:
      </p>
      <pre>
        <code>
          ~/.aws/credentials
          <br />
          ~/.aws/config
        </code>
      </pre>
      <p>You can open them up and edit them if you like or just run <code>aws configure</code> again to change them.</p>
      <h3 id="test-the-cli">Test the CLI!</h3>
      <p>
        Now you should be able to use your CLI to access AWS. For example, I should be able to see the S3 buckets I have in <code>us-east-1</code>:
      </p>
      <pre>
        <code className="language-bash">
          aws s3 ls
          <br />
          <br />
          2020-12-09 22:36:32 blog.pixegami.com
          <br />
          2020-12-27 00:04:52 cloud-archiver.5dac84a54677.archivetest
        </code>
      </pre>
      <p>
        Generally, everything that can be done in the console can also be done in the CLI. Check out the{' '}
        <a href="https://docs.aws.amazon.com/cli/latest/index.html">full reference guide here</a>.
      </p>
      <h3 id="aws-sdk">AWS SDK</h3>
      <p>
        Finally, to use AWS directly from your application code, you need to download the{' '}
        <a href="https://aws.amazon.com/tools/">SDK</a> for the language you work with.
      </p>
      <p>
        The SDKs can be configured in different ways as well, but by default it usually uses the same profiles and credentials stored by your{' '}
        <code>aws configure</code>.
      </p>
      <h3 id="thats-it">That's it!</h3>
      <p>You're all set to start using AWS.</p>
      <h2 id="why-aws">Why AWS?</h2>
      <p>
        When we bring "the cloud" into a project, it's usually because there's some capability we'd like to add.
      </p>
      <ul>
        <li>Hosting for a website or service.</li>
        <li>File or data storage.</li>
        <li>On-demand computation.</li>
        <li>Authentication.</li>
      </ul>
      <p>
        And there's many viable solutions to choose from—
        <a href="https://azure.microsoft.com/en-au/">Azure</a>, <a href="https://cloud.google.com">Google Cloud</a>,{' '}
        <a href="https://firebase.google.com">Firebase</a>, <a href="https://try.digitalocean.com">Digital Ocean</a>.
      </p>
      <p>
        So why could you choose <a href="https://aws.amazon.com/what-is-aws/">AWS</a> over any of these alternatives? From a new user's perspective:
      </p>
      <ul>
        <li>
          <p>
            <strong>Largest marketshare (at 30%)</strong> which roughly translates to lots of community resources and job opportunities.
          </p>
        </li>
        <li>
          <p>
            <strong>Most services available (175+)</strong> which means more tools at your disposal, well-integrated under one umbrella.
          </p>
        </li>
      </ul>
      <p>On the flip-side, the biggest drawback is its upfront complexity.</p>
      <p>Personally though, the reason I use AWS is because it's the technology I'm most familiar with.</p>
      <h2 id="why-serverless">Why Serverless?</h2>
      <p>
        <strong>It's cheaper.</strong> Most cloud "getting started" guides will show you how to spin up a server—a mercenary rented computer that stays online 24/7 to do your bidding.
      </p>
      <p>
        But for most of my projects, I'm going utilize technology that doesn't require a hosted server. In particular:
      </p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S3</td>
            <td>File storage</td>
          </tr>
          <tr>
            <td>DynamoDB</td>
            <td>Database</td>
          </tr>
          <tr>
            <td>Lambda</td>
            <td>Compute engine</td>
          </tr>
        </tbody>
      </table>
      <p>
        Their on-demand pricing means the cost scales with usage. There is a{' '}
        <a href="https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc">free tier</a>, and it only begins to cost money if usage exceeds a certain amount.
      </p>
      <p>
        For small projects with light traffic, this usually translates to monthly costs of <strong>less than a dollar</strong> (if not completely free).
      </p>
      <p>
        In comparison, the price of hosting a server typically starts at <strong>$5.00 per month</strong>.
      </p>
      <h2 id="continue-learning">Continue Learning</h2>
      <ul>
        <li>
          <a href="https://aws.amazon.com/getting-started/">Official documentation</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ubCNZRNjhyo">Free YouTube videos</a>
        </li>
        <li>
          <a href="https://www.udemy.com/course/aws-certified-developer-associate/">Udemy Courses</a>
        </li>
      </ul>
    </div>
  );
};

export default AWSQuickStart;
