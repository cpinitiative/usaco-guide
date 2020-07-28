import sys, re, json

res = {}

def go(source):
	sys.stdin = open(source+".txt","r")
	res[source]={}

	for line in sys.stdin:
		line = line.strip()
		if not re.match('([0-9]+\.[0-9]+)|([0-9]+)',line):
			continue
		if source != "PAPS":
			sec = line[:line.find(' ')]
			ind = -1
			while line[ind].isdigit():
				ind -= 1
			pg = line[ind+1:]
			res[source][sec] = int(pg)
		else:
			components = [a for a in line.split() if len(a) > 0]
			tmp = []
			# print("BEFORE",components)
			for x in components:
				cur = ""
				periods = 0
				bad = False
				for c in x:
					if c == '.':
						periods += 1
					else:
						if periods > 1 or not bad:
							tmp.append(cur)
							tmp.append("".join(['.']*periods))
							cur = ""
							periods = 0
						else:
							cur += "".join(['.']*periods)
							periods = 0
						bad = True
						cur += c
				tmp.append(cur)
				tmp.append("".join(['.']*periods))
				# ind = 0
				# while ind < len(x) and x[ind] == '.':
				# 	ind += 1
				# tmp.append("".join(['.']*ind))
				# x = x[ind:]
				# ind = len(x)-1
				# while ind >= 0 and x[ind] == '.':
				# 	ind -= 1
				# if ind < len(x)-1:
				# 	aft = "".join(['.']*(len(x)-1-ind))
				# 	bef = x[:ind+1]
				# 	tmp.append(bef)
				# 	tmp.append(aft)
				# else:
				# 	tmp.append(x)

			tmp = [a for a in tmp if len(a) > 0]
			# print("BEFORE",tmp)
			cnt = 0
			components = []
			for a in tmp:
				if a == '.':
					cnt += 1
				else:
					components.append("".join(['.']*cnt))
					cnt = 0
					components.append(a)
			components.append("".join(['.']*cnt))
			components = [a for a in components if len(a) > 0]

			def splitUp(a):
				if a[0].isdigit() and not a.startswith("2D"):
					ind = 0
					while ind < len(a) and (a[ind].isdigit() or a[ind] == '.'):
						ind += 1
					if ind < len(a):
						return [a[:ind],a[ind:]]
				return [a]
			tmp = []
			for a in components:
				tmp += splitUp(a)
			tmp = [a for a in tmp if a[0].isdigit() and not a.startswith("2D")]
			# print("RESULT",tmp)
			if len(tmp)%2 != 0:
				print("OOPS",tmp)
			# print(tmp)
			for i in range(len(tmp)//2):
				res[source][tmp[2*i]] = int(tmp[2*i+1])

	offset = 0
	if source == 'CPH':
		offset += 10
	elif source == 'CPP' or source == 'JAVA':
		offset += 5
	elif source == "PAPS":
		offset += 12
	elif source == "CP2":
		offset += 16
	else:
		assert(false)
	for a in res[source]:
		res[source][a] += offset

go("CPP")
go("JAVA")
go("CPH")
go("PAPS")
go("CP2")
print(json.dumps(res,indent=4))