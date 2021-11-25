import PyPDF2
import numpy as np

fhandle = open('./sources/cpp.pdf', 'rb')
pdfFile = PyPDF2.PdfFileReader(fhandle)

# the page that the table of contents ends on
toc_end = 5

res = {}
res2 = {}

last_page = toc_end

for page in range(toc_end, pdfFile.numPages):
	text = pdfFile.getPage(page).extractText()
	if page == 6:
		print(text)
	for chapter in np.arange(1, 16, 0.1):
		chapter = chapter.round(2)
		if chapter % 1 == 0:
			chapter = int(chapter)
			for line in text.split('\n'):
				if str.startswith(line, f'Chapter{chapter}') and abs(last_page - page) < 10:
					if not chapter in res:
						res[chapter] = page + 1 # handle offset
						res2[str(chapter)] = page + 1
						last_page = page
						print("Chapter:", chapter)
		else: 
			for line in text.split('\n'):
				if str.startswith(line, str(chapter)) and abs(last_page - page) < 10:
					if not chapter in res:
						res[chapter] = page + 1 # handle offset
						res2[str(chapter)] = page + 1
						last_page = page
						print("Chapter:", chapter)

print(res2)