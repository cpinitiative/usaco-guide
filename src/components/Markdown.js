import React from 'react';

import '../styles/markdown.css';
import 'katex/dist/katex.min.css';
import '../styles/prism-theme.css';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Markdown = ({ body, className, excerptOnly = false }) => {
	return (
		<div className={`markdown ${className}`}>
			<MDXRenderer excerptOnly={excerptOnly}>{body}</MDXRenderer>
		</div>
	);
};

export default Markdown;
