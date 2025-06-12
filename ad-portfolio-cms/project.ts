export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'tech', title: 'Tech Stack', type: 'array', of: [{type: 'string'}]},
    {name: 'github', title: 'GitHub Link', type: 'url'},
    {name: 'live', title: 'Live Site Link', type: 'url'},
  ],
}
// This is a Sanity schema for a project document, defining the structure and fields for each project entry in the CMS.
// It includes fields for title, description, image, tech stack, GitHub link, and live site link.       
export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Description', type: 'text'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'tech', title: 'Tech Stack', type: 'array', of: [{type: 'string'}]},
    {name: 'github', title: 'GitHub Link', type: 'url'},
    {name: 'live', title: 'Live Site Link', type: 'url'},
  ],
}