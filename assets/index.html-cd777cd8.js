import{_ as t,M as o,p as r,q as l,R as n,t as e,N as s,a1 as i}from"./framework-96b046e1.js";const c="/learning-2024-devops/assets/ansiblevsterraform-d14f8275.png",p={},d=i('<h1 id="provisionning" tabindex="-1"><a class="header-anchor" href="#provisionning" aria-hidden="true">#</a> Provisionning</h1><p>This section introduces Provisioning as a crucial step in setting up and configuring infrastructure for applications. It covers tools like Ansible and Terraform for infrastructure automation, Vagrant for creating development environments, and leveraging GitLab for automating provisioning tasks within CI/CD pipelines.</p><h2 id="definitions" tabindex="-1"><a class="header-anchor" href="#definitions" aria-hidden="true">#</a> Definitions</h2><h3 id="provision" tabindex="-1"><a class="header-anchor" href="#provision" aria-hidden="true">#</a> Provision</h3><p>Provisioning refers to the process of setting up and configuring infrastructure and resources needed for software applications to run. It involves tasks such as installing operating systems, configuring networks, and deploying applications.</p><h3 id="configuration-management-tool" tabindex="-1"><a class="header-anchor" href="#configuration-management-tool" aria-hidden="true">#</a> Configuration management tool</h3><p>A configuration management tool is a software solution designed to automate the process of managing and maintaining the configuration of computer systems, servers, and software applications in a consistent and efficient manner.</p><h3 id="gitops" tabindex="-1"><a class="header-anchor" href="#gitops" aria-hidden="true">#</a> GitOps</h3><p>GitOps is a modern operational framework that leverages Git as a single source of truth for managing infrastructure as code and the entire software delivery pipeline. It extends the principles of version control and collaboration from software development to the entire infrastructure and deployment lifecycle.</p><h4 id="key-aspects-and-functions" tabindex="-1"><a class="header-anchor" href="#key-aspects-and-functions" aria-hidden="true">#</a> Key Aspects and Functions:</h4><ol><li><p><strong>Configuration Consistency:</strong> These tools ensure that all systems within an infrastructure are configured consistently, reducing errors and improving reliability.</p></li><li><p><strong>Automation:</strong> They automate the setup, configuration, and maintenance of servers and systems, minimizing manual intervention and human error.</p></li><li><p><strong>Version Control:</strong> They often incorporate version control mechanisms, allowing administrators to track changes, roll back to previous configurations, and maintain an audit trail.</p></li><li><p><strong>Policy Enforcement:</strong> Configuration management tools enforce organizational policies and standards across the entire infrastructure, ensuring compliance and security.</p></li><li><p><strong>Scalability:</strong> They are scalable, capable of managing configurations across a few servers to large, complex infrastructures.</p></li></ol><h4 id="common-features" tabindex="-1"><a class="header-anchor" href="#common-features" aria-hidden="true">#</a> Common Features:</h4><ul><li><p><strong>Infrastructure as Code (IaC):</strong> Treats infrastructure configurations as code, allowing for easier management, reproducibility, and scalability.</p></li><li><p><strong>Templates/Manifests/Playbooks:</strong> These tools use configuration files (such as YAML or DSL-based scripts) to define and manage the desired state of systems.</p></li><li><p><strong>Agent-Based or Agentless:</strong> Some tools use agents installed on managed systems (like Puppet), while others operate agentlessly (like Ansible).</p></li><li><p><strong>Monitoring and Reporting:</strong> They often provide monitoring capabilities and reporting tools to track changes and system status.</p></li></ul><h4 id="examples-of-configuration-management-tools" tabindex="-1"><a class="header-anchor" href="#examples-of-configuration-management-tools" aria-hidden="true">#</a> Examples of Configuration Management Tools:</h4><ol><li><p><strong>Puppet:</strong> Uses declarative language to define system configurations and manage infrastructure.</p></li><li><p><strong>Ansible:</strong> Uses YAML-based playbooks for configuration management and automation, known for its simplicity and agentless nature.</p></li><li><p><strong>Chef:</strong> Uses a Ruby-based DSL (Domain-Specific Language) to define system configurations and automate infrastructure.</p></li><li><p><strong>SaltStack:</strong> Uses Python-based configuration management to control and orchestrate infrastructure.</p></li><li><p><strong>Terraform:</strong> Focuses more on provisioning infrastructure by defining and deploying it as code, often used alongside configuration management tools.</p></li></ol><p>These tools are integral in modern IT operations, enabling DevOps practices by streamlining configuration processes, reducing errors, and enhancing the reliability and scalability of systems and applications.</p><p><img src="'+c+'" alt="ansiblevsterraform"></p><h2 id="ansible" tabindex="-1"><a class="header-anchor" href="#ansible" aria-hidden="true">#</a> Ansible</h2><p>Ansible is a configuration management and automation tool that simplifies the provisioning and management of IT infrastructure. It uses YAML-based playbooks to define and automate tasks such as application deployment, configuration, and system setup across multiple servers.</p><h3 id="ansible-components" tabindex="-1"><a class="header-anchor" href="#ansible-components" aria-hidden="true">#</a> Ansible Components</h3><ul><li><strong>Inventory:</strong> Defines hosts and groups managed by Ansible.</li><li><strong>Playbooks:</strong> YAML files containing automation tasks and configurations.</li><li><strong>Modules:</strong> Predefined Ansible units performing specific tasks.</li><li><strong>Roles:</strong> Organize tasks, handlers, variables, and more for reuse.</li></ul><h3 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h3><p>Install Ansible on your control machine using package managers like <code>apt</code>, <code>yum</code>, or via Python&#39;s <code>pip</code>.</p>',23),u={class:"custom-container warning"},m=n("p",{class:"custom-container-title"},"WARNING",-1),h=n("p",null,"For windows users :",-1),g={href:"https://docs.ansible.com/ansible/latest/os_guide/windows_faq.html#windows-faq-ansible",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.ansible.com/ansible-tower/latest/html/userguide/overview.html",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="inventory-setup" tabindex="-1"><a class="header-anchor" href="#inventory-setup" aria-hidden="true">#</a> Inventory Setup</h3><p>Create an inventory file (<code>inventory.ini</code>) defining hosts and groups:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">web</span><span class="token punctuation">]</span></span>
webserver1.example.com
webserver2.example.com

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">db</span><span class="token punctuation">]</span></span>
database1.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playbooks-setup" tabindex="-1"><a class="header-anchor" href="#playbooks-setup" aria-hidden="true">#</a> playbooks setup</h2><p>Create a playbook (<code>playbook.yml</code>) containing tasks and configurations:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configure web servers
  <span class="token key atrule">hosts</span><span class="token punctuation">:</span> web
  <span class="token key atrule">tasks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Ensure Apache is installed
      <span class="token key atrule">yum</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> present
      <span class="token key atrule">become</span><span class="token punctuation">:</span> yes

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy Apache configuration
      <span class="token key atrule">copy</span><span class="token punctuation">:</span>
        <span class="token key atrule">src</span><span class="token punctuation">:</span> files/httpd.conf
        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd/conf/httpd.conf
      <span class="token key atrule">become</span><span class="token punctuation">:</span> yes
      <span class="token key atrule">notify</span><span class="token punctuation">:</span> restart apache

    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Ensure Apache is running
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> started
      <span class="token key atrule">become</span><span class="token punctuation">:</span> yes

  <span class="token key atrule">handlers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache
      <span class="token key atrule">service</span><span class="token punctuation">:</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd
        <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute the playbook:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-playbook <span class="token parameter variable">-i</span> inventory.ini playbook.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="roles" tabindex="-1"><a class="header-anchor" href="#roles" aria-hidden="true">#</a> Roles</h3><p>Organize tasks, files, templates, and variables for reuse:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-galaxy init myrole
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ansible-vault" tabindex="-1"><a class="header-anchor" href="#ansible-vault" aria-hidden="true">#</a> Ansible Vault</h3><p>Encrypt sensitive data like passwords or API keys:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ansible-vault encrypt secrets.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="🧪-exercise" tabindex="-1"><a class="header-anchor" href="#🧪-exercise" aria-hidden="true">#</a> 🧪 Exercise</h2><p>Step 1 : Make the provisionning of a web server on a VM Ubuntu of your collegue laptop over WiFi. Use a playbook for that</p><h2 id="provisioning-with-vagrant" tabindex="-1"><a class="header-anchor" href="#provisioning-with-vagrant" aria-hidden="true">#</a> Provisioning with Vagrant</h2><p>Vagrant, while primarily used for creating and managing development environments, also provides built-in provisioning capabilities. It supports multiple provisioners like Shell, Puppet, and Ansible, allowing developers to automate the setup and configuration of environments using scripts or configuration management tools.</p><p>Ansible can be use to deploy your provisionning playbooks as follow</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>Vagrant<span class="token operator">.</span>configure<span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

  <span class="token comment">#</span>
  <span class="token comment"># Run Ansible from the Vagrant Host</span>
  <span class="token comment">#</span>
  config<span class="token operator">.</span>vm<span class="token operator">.</span>provision <span class="token string">&quot;ansible&quot;</span> <span class="token keyword">do</span> <span class="token operator">|</span>ansible<span class="token operator">|</span>
    ansible<span class="token operator">.</span>playbook <span class="token operator">=</span> <span class="token string">&quot;playbook.yml&quot;</span>
  end

end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="🧪-exercise-1" tabindex="-1"><a class="header-anchor" href="#🧪-exercise-1" aria-hidden="true">#</a> 🧪 Exercise</h2><p>Update your vagrant box http server with ansible provisionning instead of scripting</p><h2 id="terraform" tabindex="-1"><a class="header-anchor" href="#terraform" aria-hidden="true">#</a> Terraform</h2><p>Terraform is an open-source Infrastructure as Code (IaC) tool by HashiCorp used for building, changing, and versioning infrastructure efficiently. It allows declarative configuration of cloud resources across various providers using simple, human-readable code.</p><h3 id="terraform-components" tabindex="-1"><a class="header-anchor" href="#terraform-components" aria-hidden="true">#</a> Terraform Components</h3><p><strong>Providers:</strong> Interfaces to interact with APIs of various cloud or service providers (AWS, Azure, GCP, etc.). <strong>Resources:</strong> Declares the infrastructure components to be managed (VMs, networks, databases, etc.). <strong>State:</strong> Records the current state of managed infrastructure, enabling Terraform to manage changes.</p><h3 id="installation-1" tabindex="-1"><a class="header-anchor" href="#installation-1" aria-hidden="true">#</a> Installation</h3><p>Download and install Terraform from the official website or use package managers like <code>apt</code>, <code>yum</code>, or <code>choco</code> for installation.</p><h3 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration Files</h3><p>Create a <code>main.tf</code> file to define infrastructure resources:</p><div class="language-hcl line-numbers-mode" data-ext="hcl"><pre class="language-hcl"><code><span class="token keyword">provider<span class="token type variable"> &quot;aws&quot; </span></span><span class="token punctuation">{</span>
  <span class="token property">region</span> <span class="token punctuation">=</span> <span class="token string">&quot;us-west-2&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">resource <span class="token type variable">&quot;aws_instance&quot;</span></span> <span class="token string">&quot;example&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">ami</span>           <span class="token punctuation">=</span> <span class="token string">&quot;ami-12345678&quot;</span>
  <span class="token property">instance_type</span> <span class="token punctuation">=</span> <span class="token string">&quot;t2.micro&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h3><p>Run the following command to initialize the working directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>terraform init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="applying-changes" tabindex="-1"><a class="header-anchor" href="#applying-changes" aria-hidden="true">#</a> Applying Changes</h3><p>Apply the configuration defined in the <code>main.tf</code> file:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>terraform apply
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="provisioning-with-gitlab-and-terraform-for-gitops" tabindex="-1"><a class="header-anchor" href="#provisioning-with-gitlab-and-terraform-for-gitops" aria-hidden="true">#</a> Provisioning with GitLab and Terraform for GitOps</h2><p>GitLab provides Continuous Integration/Continuous Deployment (CI/CD) capabilities that can include provisioning tasks. By utilizing GitLab CI/CD pipelines, you can automate provisioning tasks, integrating Ansible or Terraform scripts to set up and configure infrastructure as part of the deployment process.</p><h2 id="🧪-exercise-2" tabindex="-1"><a class="header-anchor" href="#🧪-exercise-2" aria-hidden="true">#</a> 🧪 Exercise</h2><p>Use terraform docker image to deploy throw Gitlab a virtual machine on AWS. Use puppet to provision an http server on it</p>`,41);function b(k,y){const a=o("ExternalLinkIcon");return r(),l("div",null,[d,n("div",u,[m,h,n("ul",null,[n("li",null,[n("a",g,[e("https://docs.ansible.com/ansible/latest/os_guide/windows_faq.html#windows-faq-ansible"),s(a)])]),n("li",null,[n("a",v,[e("https://docs.ansible.com/ansible-tower/latest/html/userguide/overview.html"),s(a)])])])]),f])}const w=t(p,[["render",b],["__file","index.html.vue"]]);export{w as default};
