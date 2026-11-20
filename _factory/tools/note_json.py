import re,json,sys
def load(f):
    s=open(f,encoding='utf-8').read();i=s.find('window.NOTE=')+len('window.NOTE=')
    obj,end=json.JSONDecoder().raw_decode(s[i:]);return s,i,i+end,obj
if __name__=='__main__':
    s,a,b,N=load(sys.argv[1])
    print({k:(len(json.dumps(v)) ) for k,v in N.items()})
    for k in ('sections','steps','parts','topics'):
        if k in N: print(k,len(N[k]),[ (x.get('id'),x.get('t') or x.get('title') or x.get('h'), len(json.dumps(x))) for x in N[k]])
